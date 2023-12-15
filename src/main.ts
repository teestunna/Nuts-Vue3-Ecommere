import '@/assets/main.css';

import { createHead } from '@unhead/vue';
import { createPinia } from 'pinia';
import { createApp } from 'vue';

import App from '@/App.vue';
import { createRouter } from '@/router/createRouter';

const app = createApp(App);
const head = createHead();
const router = createRouter();

app.use(createPinia());
app.use(head);
app.use(router);

app.mount('#app');
