import { encodeJwt, loginViaOauthToken } from "@/lib/api-queries";
import { google } from "@/lib/oauth";
import { OAuth2RequestError } from "arctic";

import type { APIContext } from "astro";

export async function GET(context: APIContext): Promise<Response> {
  const code = context.url.searchParams.get("code");
  const state = context.url.searchParams.get("state");
  const storedState = context.cookies.get("google_oauth_state")?.value ?? null;
  const storedCodeVerifier =
    context.cookies.get("google_code_verifier")?.value ?? null;

  if (
    !code ||
    !state ||
    !storedState ||
    state !== storedState ||
    !storedCodeVerifier
  ) {
    return new Response(null, {
      status: 400,
    });
  }

  try {
    const tokens = await google.validateAuthorizationCode(
      code,
      storedCodeVerifier
    );

    // now send the user to our backend for further processing
    const resp = await loginViaOauthToken({
      accessToken: tokens.accessToken,
      provider: "google",
    });

    console.log("resp", resp);

    if (resp instanceof Error) {
      throw new Error(resp.message);
    }

    var token = encodeJwt(resp.user);
    if (!token) {
      throw new Error("An error occurred! Try again.");
    }

    let dt = new Date();
    dt.setDate(dt.getDate() + 1);
    const expiry = new Date(dt.toDateString());

    context.cookies.set("user-session", resp.access_token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      expires: expiry,
    });

    context.cookies.set("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      expires: expiry,
    });

    // if specified redirect to
    let redirectTo = context.cookies.get("redirectTo")?.value ?? null;
    if (redirectTo) {
      redirectTo = redirectTo.startsWith("/") ? redirectTo : `/${redirectTo}`;

      // delete the cookie first
      context.cookies.delete("redirectTo", {
        path: "/",
        secure: true,
        httpOnly: true,
        sameSite: "lax",
      });

      return context.redirect(redirectTo);
    }

    // redirect to respective dashboards
    const { role } = resp.user;

    switch (role) {
      case "ADMIN":
        return context.redirect("/admin");
      case "USER":
        return context.redirect("/dashboard");
      default:
        break;
    }

    return context.redirect("/");
  } catch (e) {
    console.log("e", e);
    // the specific error message depends on the provider
    if (e instanceof OAuth2RequestError) {
      // invalid code
      // return new Response(null, {
      //   status: 400,
      // });
      return context.redirect(
        "/login?error=true&message='Invalid Code. Please try again.'"
      );
    }

    // return new Response(null, {
    //   status: 500,
    // });

    return context.redirect(
      "/login?error=true&message='An Error Occurred. Please try again.'"
    );
  }
}

interface GoogleUser {
  id: string;
  login: string;
}
