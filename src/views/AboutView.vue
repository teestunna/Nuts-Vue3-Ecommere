<script setup lang="ts">
import { useHead } from '@unhead/vue';

useHead({
  bodyAttrs: {
    class: 'theme-scaffolding',
  },
  title: 'About placeholder',
});
</script>

<template>
  <div class="lg:flex lg:items-center lg:min-h-screen">
    <h1>This is an about page</h1>
  </div>
</template>
