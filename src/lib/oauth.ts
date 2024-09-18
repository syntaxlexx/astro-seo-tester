import { GitHub, Google } from "arctic";

const redirectURI = "/login/github/callback";

export const github = new GitHub(
  import.meta.env.GITHUB_CLIENT_ID,
  import.meta.env.GITHUB_CLIENT_SECRET,
  {
    redirectURI,
  }
);

export const google = new Google(
  import.meta.env.GITHUB_CLIENT_ID,
  import.meta.env.GITHUB_CLIENT_SECRET,
  redirectURI
);
