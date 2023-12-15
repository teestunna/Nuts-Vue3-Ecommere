<script setup lang="ts">
import { TypographyTags } from '@/utils/accessibility';

withDefaults(defineProps<{ headerTag?: TypographyTags }>(), {
  headerTag: 'h1',
});
</script>

<template>
  <component :is="headerTag" class="font-bold header-1 font-gelica">
    <slot />
  </component>
</template>

<style scoped lang="scss">
.header-1 {
  font-size: 32px;
  line-height: 36px;

  @media (min-width: 768px) {
    font-size: 48px;
    line-height: 52px;
  }
}
</style>
