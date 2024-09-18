import { google } from "@/lib/oauth";
import { generateCodeVerifier, generateState } from "arctic";

import type { APIContext } from "astro";

export async function GET(context: APIContext): Promise<Response> {
  const state = generateState();
  const codeVerifier = generateCodeVerifier();
  const url = await google.createAuthorizationURL(state, codeVerifier, {
    scopes: ["profile", "email"],
  });

  context.cookies.set("google_oauth_state", state, {
    path: "/",
    secure: true,
    httpOnly: true,
    maxAge: 60 * 10,
    sameSite: "lax",
  });

  context.cookies.set("google_code_verifier", codeVerifier, {
    path: "/",
    secure: true,
    httpOnly: true,
    maxAge: 60 * 10,
    sameSite: "lax",
  });

  const redirectTo = context.url.searchParams.get("redirectTo");
  if (redirectTo) {
    context.cookies.set("redirectTo", redirectTo, {
      path: "/",
      secure: true,
      httpOnly: true,
      maxAge: 60 * 10,
      sameSite: "lax",
    });
  }

  return context.redirect(url.toString());
}
