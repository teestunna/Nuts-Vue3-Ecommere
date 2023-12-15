<script setup lang="ts">
import { TypographyTags } from '@/utils/accessibility';

withDefaults(defineProps<{ headerTag?: TypographyTags }>(), {
  headerTag: 'h4',
});
</script>

<template>
  <component
    :is="headerTag"
    class="text-xl font-semibold leading-6 font-sofia-pro md:text-2xl md:leading-7 header-4"
  >
    <slot />
  </component>
</template>
