import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path  from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src'),
      "@assets": path.resolve(__dirname, './src/assets'),
      "@components": path.resolve(__dirname, './src/components'),
      "@services": path.resolve(__dirname, './src/services'),
      "@routes": path.resolve(__dirname, './src/routes'),
      "@hooks": path.resolve(__dirname, './src/hooks'),
      "@views": path.resolve(__dirname, './src/views'),
      "@types": path.resolve(__dirname, './src/types'),
    }
  }
})
