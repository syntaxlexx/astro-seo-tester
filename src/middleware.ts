import { defineMiddleware } from "astro:middleware";
import { decodeJwt } from "./lib/api-queries";

const protectedRoutes = ["/dashboard", "/admin"];

export const onRequest = defineMiddleware((context, next) => {
  const user = decodeJwt(context.cookies.get("token")?.value);

  if (user) {
    context.locals.user = user;
  } else {
    context.locals.user = null;
  }

  const pathname = context.url.pathname;

  // check if in a protected route
  let inProtectedRoute = false;
  for (let i = 0; i < protectedRoutes.length; i++) {
    if (pathname.startsWith(protectedRoutes[i])) {
      inProtectedRoute = true;
      break;
    }
  }

  if (inProtectedRoute) {
    const isLoggedIn = context.cookies.get("user-session");

    if (!isLoggedIn || !user) {
      context.cookies.delete("user-session", {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "/",
      });

      context.cookies.delete("token", {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "/",
      });

      return context.redirect("/login");
    }

    // check user role
    if (user.role === "ADMIN" && !pathname.startsWith("/admin")) {
      return context.redirect("/admin");
    }

    if (user.role === "USER" && !pathname.startsWith("/dashboard")) {
      return context.redirect("/dashboard");
    }
  }

  // return a Response or the result of calling `next()`
  return next();
});
