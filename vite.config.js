import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/': 'http://localhost', // Adjust this if you're using a different port for Laravel
    },
  },
});
