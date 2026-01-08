// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://understandingdementiacare.com',
  output: 'hybrid',
  adapter: vercel(),
  
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react(), sitemap()]
});