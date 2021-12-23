import { createApp } from 'vue';
import App from './App.vue';
// import lazyPlugin from 'vue3-lazy';
import 'lazysizes';
import 'reset.css';
import './style/main.less';
import { createPinia } from 'pinia';

const app = createApp(App);

app.use(createPinia());

// app.use(lazyPlugin, {
//   loading: '/assets/images/default.png', // 图片加载时默认图片
//   error: '/assets/images/error.png', // 图片加载失败时默认图片
// });

app.config.globalProperties.$static_url = import.meta.env.VITE_APP_STATIC_URL;

app.mount('#app');
