<script setup lang="ts">
import { TypographyTags } from '@/utils/accessibility';

withDefaults(defineProps<{ headerTag?: TypographyTags }>(), {
  headerTag: 'h6',
});
</script>

<template>
  <component
    :is="headerTag"
    class="text-sm font-semibold leading-4 font-sofia-pro header-6 md:text-base md:leading-5"
  >
    <slot />
  </component>
</template>
