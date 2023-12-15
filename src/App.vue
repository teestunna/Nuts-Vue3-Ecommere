<script setup lang="ts">
import { Link, useHead } from '@unhead/vue';
import { computed } from 'vue';
import { RouterView, useRoute } from 'vue-router';

import SimplifiedFooter from '@/components/layout/footer/SimplifiedFooter.vue';
import SimplifiedHeader from '@/components/layout/header/SimplifiedHeader.vue';

const fonts = [
  '/fonts/proxima-nova-regular.woff2',
  '/fonts/proxima-nova-semibold.woff2',
  '/fonts/sofia-pro-semi-bold.woff2',
  '/fonts/sofia-pro-bold.woff2',
  // sofia-pro-regular skipped because we barely use it
].map<Link>((href) => ({
  rel: 'preload',
  as: 'font',
  type: 'font/woff2',
  href,
}));

useHead({
  link: [
    ...fonts,
    {
      rel: 'preload',
      as: 'style',
      href: 'https://use.typekit.net/qjh0ikv.css',
    },
  ],
  title: 'Senior Vue.js Engineer Dev Test',
});

const route = useRoute();
const hasFooterOverride = computed(() => 'pageFooter' in (route.matched[0]?.components ?? {}));
const hasHeaderOverride = computed(() => 'pageHeader' in (route.matched[0]?.components ?? {}));
</script>

<template>
  <RouterView v-if="hasHeaderOverride" name="pageHeader" />
  <SimplifiedHeader v-else />

  <RouterView />

  <RouterView v-if="hasFooterOverride" name="pageFooter" />
  <SimplifiedFooter v-else />
</template>

<style lang="scss">
.theme-scaffolding {
  @apply lg:flex lg:place-items-center;

  #app {
    @apply p-8 lg:py-0 lg:grid max-w-7xl lg:px-8 lg:grid-cols-2;
  }
}
</style>
