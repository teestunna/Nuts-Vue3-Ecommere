<script setup lang="ts">
defineProps<{ underline?: boolean }>();
</script>

<template>
  <p class="text-sm base-text md:text-base md:leading-6" :class="{ underline }">
    <slot />
  </p>
</template>

<style scoped lang="scss">
.base-text {
  @media (max-width: 768px) {
    line-height: 22px;
  }
}
</style>
