<script setup lang="ts">
defineProps<{ underline?: boolean }>();
</script>

<template>
  <p class="caption md:text-xs" :class="{ underline }">
    <slot />
  </p>
</template>

<style scoped lang="scss">
.caption {
  @media (max-width: 768px) {
    font-size: 10px;
    line-height: 14px;
  }
}
</style>
