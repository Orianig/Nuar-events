// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages: repo "Nuar-events" → https://usuario.github.io/Nuar-events/
const base = '/Nuar-events';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  base,
  site: 'https://tu-usuario.github.io',
  redirects:
    base === '/' ? { '/': '/es/' } : { [base + '/']: base + 'es/' },
  vite: {
    plugins: [tailwindcss()]
  }
});