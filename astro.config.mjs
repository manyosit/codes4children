import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://codes4children.pages.dev',
  output: 'static',
  integrations: [
    sitemap(),
    tailwind(),
  ],
});
