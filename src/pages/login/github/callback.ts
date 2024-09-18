import { encodeJwt, loginViaOauthToken } from "@/lib/api-queries";
import { github } from "@/lib/oauth";
import { OAuth2RequestError } from "arctic";

import type { APIContext } from "astro";

export async function GET(context: APIContext): Promise<Response> {
  const code = context.url.searchParams.get("code");
  const state = context.url.searchParams.get("state");
  const storedState = context.cookies.get("github_oauth_state")?.value ?? null;

  if (!code || !state || !storedState || state !== storedState) {
    return new Response(null, {
      status: 400,
    });
  }

  try {
    const tokens = await github.validateAuthorizationCode(code);

    // now send the user to our backend for further processing
    // const
    // tokens.accessToken
    const resp = await loginViaOauthToken({
      accessToken: tokens.accessToken,
      provider: "github",
    });

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

    // TODO: redirect to respective dashboards
    return context.redirect("/");
  } catch (e) {
    // the specific error message depends on the provider
    if (e instanceof OAuth2RequestError) {
      // invalid code
      return new Response(null, {
        status: 400,
      });
    }

    return new Response(null, {
      status: 500,
    });
  }
}

interface GitHubUser {
  id: string;
  login: string;
}
