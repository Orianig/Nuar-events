// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Configuración para dominio propio https://www.nuarevents.es
const base = '/';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  base,
  site: 'https://www.nuarevents.es',
  redirects:
    base === '/' ? { '/': '/es/' } : { [base + '/']: base + 'es/' },
  vite: {
    plugins: [tailwindcss()]
  }
});