import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

const baseFolder = path.resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(baseFolder, './src')
    }
  },
  build: {
    outDir: 'dist',
    minify: true
  },
  server: {
    host: '0.0.0.0',
    port: 3001,
    hmr: true,
    cors: true
  }
});
