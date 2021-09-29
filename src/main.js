import { createApp } from 'vue';
import App from './App.vue';
import lazyPlugin from 'vue3-lazy';
import 'lazysizes';
import 'reset.css';
import './style/main.less';

createApp(App)
  .use(lazyPlugin, {
    loading: '/assets/images/default.png', // 图片加载时默认图片
    error: '/assets/images/error.png', // 图片加载失败时默认图片
  })
  .mount('#app');
