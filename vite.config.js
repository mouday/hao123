import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const { resolve } = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  base: '/hao123/',

  plugins: [vue()],

  server: {
    open: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
