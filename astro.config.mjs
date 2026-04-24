// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Configuración para dominio propio https://www.nuarevents.es
const base = '/';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  base,
  site: 'https://www.nuarevents.es',
  integrations: [sitemap()],
  redirects: {
    '/es': '/',
    '/es/projects': '/projects',
    '/es/contact': '/contact',
  },
  vite: {
    plugins: [tailwindcss()]
  }
});