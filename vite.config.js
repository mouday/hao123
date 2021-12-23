import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const { resolve } = require('path');
// import externalGlobals from 'rollup-plugin-external-globals';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/hao123/',

  plugins: [
    vue(),
    // 引入外部CDN
    // externalGlobals({
    //   vue: 'Vue',
    // }),
  ],

  server: {
    open: true,
    host: '127.0.0.1',
    port: 8000,
    hmr: true,
    // force: true,
  },

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      // vue: 'https://esm.sh/vue@3.2.13',
      // lazysizes: 'https://esm.sh/lazysizes',
    },
  },
});
