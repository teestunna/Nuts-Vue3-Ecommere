import { type RouteRecordRaw } from 'vue-router';

const AboutView = () => import('@/views/AboutView.vue');
const HomeView = () => import('@/views/HomeView.vue');
const SearchView = () => import('@/views/SearchView.vue');
const ScaffoldingHeader = () => import('@/components/layout/header/ScaffoldingHeader.vue');
const ScaffoldingHomeView = () => import('@/views/ScaffoldingHomeView.vue');
const StyleGuideView = () => import('@/views/StyleGuideView.vue');

// eslint-disable-next-line import/prefer-default-export
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    components: {
      default: AboutView,
      pageFooter: { template: '' },
      pageHeader: ScaffoldingHeader,
    },
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView,
  },
  {
    path: '/style-guide',
    name: 'style-guide',
    component: StyleGuideView,
  },
  {
    path: '/the-stack',
    name: 'stack',
    components: {
      default: ScaffoldingHomeView,
      pageFooter: { template: '' },
      pageHeader: ScaffoldingHeader,
    },
  },
];
