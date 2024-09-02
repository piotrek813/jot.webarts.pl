import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import db from "@astrojs/db";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), db()],
  output: 'hybrid',
  adapter: netlify()
});
