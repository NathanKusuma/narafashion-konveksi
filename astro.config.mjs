// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: Ganti dengan domain asli nanti
  site: 'https://narafashion.com',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});
