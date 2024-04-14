import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';
import Manifest from './configs/manifest';
import path from 'path';

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      manifest: Manifest,
      includeAssets: ['/data.json'],
      strategies: 'generateSW',
    }),
  ],
  optimizeDeps: {
    exclude: ['js-big-decimal'],
  },
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
