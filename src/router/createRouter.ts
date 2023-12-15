import { createRouter as createVueRouter, createWebHistory } from 'vue-router';

import { routes } from '@/router/routes';

// eslint-disable-next-line import/prefer-default-export
export const createRouter = () =>
  createVueRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, _, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      }
      if (to.hash) {
        return {
          el: to.hash,
          behavior: 'smooth',
        };
      }
      return { top: 0 };
    },
  });
