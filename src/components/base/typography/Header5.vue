<script setup lang="ts">
import { TypographyTags } from '@/utils/accessibility';

withDefaults(defineProps<{ headerTag?: TypographyTags }>(), {
  headerTag: 'h5',
});
</script>

<template>
  <component
    :is="headerTag"
    class="text-base font-semibold leading-5 header-5 font-sofia-pro md:text-xl md:leading-6"
  >
    <slot />
  </component>
</template>
