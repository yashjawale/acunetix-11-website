import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://yashjawale.github.io',
  base: '/acunetix-11-website',
  integrations: [tailwind()]
});