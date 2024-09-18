// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  prefetch: true,

  security: {
    checkOrigin: true,
  },

  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],

  image: {
    remotePatterns: [{ protocol: "https" }],
    domains: ["picsum.photos", "via.placeholder.com"],
  },

  output: "server",

  adapter: vercel(),
});
