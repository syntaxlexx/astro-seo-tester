import { encodeJwt, login } from "@/lib/api-queries";
import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:schema";

const systemCookies = ["token", "user-session", "github_oauth_state"];

export const auth = {
  loginAction: defineAction({
    input: z.object({
      email: z.string(),
      password: z.string(),
    }),
    handler: async ({ email, password }, ctx) => {
      const resp = await login({ email, password });

      if (resp instanceof Error) {
        throw new ActionError({
          code: "UNAUTHORIZED",
          message: resp.message,
        });
      }

      var token = encodeJwt(resp.user);
      if (!token) {
        throw new ActionError({
          code: "UNAUTHORIZED",
          message: "An error occurred! Try again.",
        });
      }

      let dt = new Date();
      dt.setDate(dt.getDate() + 1);
      const expiry = new Date(dt.toDateString());

      ctx.cookies.set("user-session", resp.access_token, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "/",
        expires: expiry,
      });

      ctx.cookies.set("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "/",
        expires: expiry,
      });

      return {
        user: resp.user,
      };
    },
  }),

  logout: defineAction({
    handler: (input, ctx) => {
      systemCookies.forEach((cookie) => {
        ctx.cookies.delete(cookie, {
          httpOnly: true,
          secure: true,
          sameSite: "lax",
          path: "/",
        });
      });

      return `Successfully logged out.`;
    },
  }),
};
