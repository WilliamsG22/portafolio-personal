import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' para que funcione al publicar en GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: './',
});
