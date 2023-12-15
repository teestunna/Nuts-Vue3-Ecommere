<script setup lang="ts">
import { useHead } from '@unhead/vue';

import TheWelcome from '@/components/TheWelcome.vue';

useHead({
  bodyAttrs: {
    class: 'theme-scaffolding',
  },
});
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
