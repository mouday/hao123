import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/hao123/',

  plugins: [vue()],

  server: {
    open: true,
  },
});
