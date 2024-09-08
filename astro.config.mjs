// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { remarkReadingTime } from "./src/utils/remark-reading-time.mjs";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://derrickdryer.github.io",
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
    syntaxHighlight: "shiki",
    shikiConfig: {
      themes: {
        light: "catppuccin-mocha",
        dark: "catppuccin-latte",
      },
    },
  },
});
