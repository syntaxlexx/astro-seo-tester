/// <reference path="../.astro/types.d.ts" />

import type { Session, User } from "./types";

declare global {
  namespace App {
    interface Locals {
      user: User | null;
      session: Session | null;
    }
  }
}
