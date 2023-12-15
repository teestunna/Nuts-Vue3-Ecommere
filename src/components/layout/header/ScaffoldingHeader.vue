<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { RouterLink } from 'vue-router';

import HelloWorld from '@/components/HelloWorld.vue';

useHead({
  title: 'Senior Vue.js Engineer Dev Test',
});
</script>

<template>
  <header class="max-h-screen leading-normal lg:flex lg:place-items-center lg:pr-20">
    <img
      alt="Vue logo"
      class="block mx-auto mb-8 lg:mr-8 lg:mb-0 lg:ml-0"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="lg:flex lg:place-items-start lg:flex-wrap">
      <HelloWorld msg="You did it!" />

      <nav
        class="w-full mt-8 text-xs text-center lg:text-left lg:mt-4 lg:-ml-4 lg:py-4 lg:text-base divide-x divide-solid divide-[var(--color-border)]"
      >
        <RouterLink to="/" class="inline-block px-4">Home</RouterLink>
        <RouterLink to="/the-stack" class="inline-block px-4">The Stack</RouterLink>
        <RouterLink to="/about" class="inline-block px-4">About</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.theme-scaffolding .router-link-exact-active {
  color: var(--color-text);
  &:hover {
    background-color: transparent;
  }
}
</style>
