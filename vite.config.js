import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Set base to repo name for GitHub Pages: https://ojaswakesharwani.github.io/Vimla-Global-Beohari/
export default defineConfig({
  base: '/Vimla-Global-Beohari/',
  plugins: [react()],
  server: {
    port: 3000,
    open: false
  }
});
