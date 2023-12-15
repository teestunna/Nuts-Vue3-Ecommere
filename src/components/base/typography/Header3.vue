<script setup lang="ts">
import { TypographyTags } from '@/utils/accessibility';

withDefaults(defineProps<{ headerTag?: TypographyTags }>(), {
  headerTag: 'h3',
});
</script>

<template>
  <component
    :is="headerTag"
    class="text-2xl font-semibold leading-7 header-3 font-gelica md:leading-9"
  >
    <slot />
  </component>
</template>

<style scoped lang="scss">
.header-3 {
  @media (min-width: 768px) {
    font-size: 32px;
  }
}
</style>
