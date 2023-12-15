<script setup lang="ts">
defineProps<{ underline?: boolean }>();
</script>

<template>
  <p class="text-xs leading-4 md:text-sm" :class="{ underline }">
    <slot />
  </p>
</template>
