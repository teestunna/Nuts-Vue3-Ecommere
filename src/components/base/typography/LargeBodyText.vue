<script setup lang="ts">
defineProps<{ underline?: boolean }>();
</script>

<template>
  <p class="text-base font-semibold large-text md:text-lg md:leading-6" :class="{ underline }">
    <slot />
  </p>
</template>

<style scoped lang="scss">
.large-text {
  @media (max-width: 768px) {
    line-height: 22px;
  }
}
</style>
