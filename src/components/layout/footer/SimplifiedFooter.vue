<script setup lang="ts">
import { RouterLink } from 'vue-router';

import NutsLogo from '@/components/base/assets/NutsLogo.vue';
</script>

<template>
  <div class="bg-nuts-neutral-950">
    <div
      class="flex flex-col items-center self-stretch p-8 mx-auto md:justify-between md:flex-row lg:px-16 2xl:max-w-screen-2xl"
    >
      <RouterLink to="/">
        <NutsLogo class="w-24 text-white h-9 lg:w-32 lg:h-12" />
      </RouterLink>
    </div>
    <div class="py-6 border-t border-white border-solid">
      <ul
        class="flex flex-wrap justify-center py-2 mx-auto text-center 2xl:max-w-screen-2xl gap-y-2 gap-x-6"
      >
        <li>
          <RouterLink class="text-base no-link-styles" to="/style-guide">Style Guide</RouterLink>
        </li>
        <li>
          <RouterLink class="text-base no-link-styles" to="/search">Search</RouterLink>
        </li>
        <li>
          <RouterLink class="text-base no-link-styles" to="/the-stack">The Stack</RouterLink>
        </li>
        <li>
          <RouterLink class="text-base no-link-styles" to="/about">About us</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.no-link-styles {
  @apply text-white hover:no-underline focus:no-underline cursor-pointer;
}
</style>
