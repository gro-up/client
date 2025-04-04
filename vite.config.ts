import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import VitePluginHtmlEnv from 'vite-plugin-html-env';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), VitePluginHtmlEnv()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin-allow-popups',
    },
  },
});
