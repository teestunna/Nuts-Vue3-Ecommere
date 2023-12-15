<script setup lang="ts">
import { computed, useAttrs } from 'vue';

defineProps<{ disabled?: boolean }>();
const emit = defineEmits(['click']);

const attrs = useAttrs();
const click = (e: Event) => emit('click', e);

const hasMobileBgOverride = computed(() => {
  if ('class' in attrs && typeof attrs.class === 'string') {
    return attrs.class.indexOf('bg-') === 0 || attrs.class.includes(' bg-');
  }
  return false;
});
</script>

<template>
  <button
    class="p-0 text-base text-black border-0 appearance-none font-proxima-nova"
    :class="[
      disabled ? 'cursor-not-allowed' : 'cursor-pointer',
      { 'bg-transparent': !hasMobileBgOverride },
    ]"
    :disabled="disabled"
    type="button"
    @click="click"
  >
    <slot />
  </button>
</template>
