<script setup lang="ts">
defineProps<{ to: string }>();
</script>

<template>
  <a
    class="bg-white sr-only focus:absolute focus:not-sr-only focus:text-red-800 left-5 top-1"
    :href="to"
  >
    <slot />
  </a>
</template>
