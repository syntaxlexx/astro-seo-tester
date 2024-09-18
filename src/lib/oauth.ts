import { GitHub, Google } from "arctic";
import { APP_URL } from "./constants";

export const github = new GitHub(
  import.meta.env.GITHUB_CLIENT_ID,
  import.meta.env.GITHUB_CLIENT_SECRET,
  {
    redirectURI: "/login/github/callback",
  }
);

export const google = new Google(
  import.meta.env.GOOGLE_CLIENT_ID,
  import.meta.env.GOOGLE_CLIENT_SECRET,
  `${APP_URL}/login/google/callback`
);
