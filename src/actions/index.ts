import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { auth } from "./auth";

export const server = {
  auth,
};
