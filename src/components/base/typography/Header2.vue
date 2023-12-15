<script setup lang="ts">
import { TypographyTags } from '@/utils/accessibility';

withDefaults(defineProps<{ headerTag?: TypographyTags }>(), {
  headerTag: 'h2',
});
</script>

<template>
  <component :is="headerTag" class="font-semibold header-2 font-gelica">
    <slot />
  </component>
</template>

<style scoped lang="scss">
.header-2 {
  font-size: 28px;
  line-height: 32px;

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 44px;
  }
}
</style>
