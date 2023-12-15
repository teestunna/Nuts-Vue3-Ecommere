<script setup lang="ts">
import { ref } from 'vue';

import BaseBodyText from '@/components/base/typography/BaseBodyText.vue';
import Header6 from '@/components/base/typography/Header6.vue';
import UnstyledButton from '@/components/base/UnstyledButton.vue';
import { FacetGroup } from '@/composables/search/useSearchVariants';

const facetGroupsByKey = defineModel<Map<string, FacetGroup>>({ required: true });
const query = defineModel<string>('query', { required: true });
const showFilters = ref(false);

const createFacetLabel = (facet: string) => {
  if (!facet.includes('.')) return facet;
  const label = facet.split('.').pop()!;
  if (label === 'product type') return 'type';
  if (label === 'searchableTags') return 'tags';
  return label;
};

const hasFacetOptions = (facetGroup: FacetGroup) =>
  Object.keys(facetGroup.options).length > 0 || facetGroup.selections.size > 0;

const onFacetChange = (event: Event, facet: string, value: string) => {
  if (!(event.target instanceof HTMLInputElement)) return;
  const facetOptions = facetGroupsByKey.value.get(facet);
  if (event.target.checked) {
    facetOptions?.selections.add(value);
  } else {
    facetOptions?.selections.delete(value);
  }
};
</script>

<template>
  <div
    class="inset-0 flex-col justify-start w-full gap-4 px-4 lg:w-1/4 lg:flex lg:relative lg:px-0"
    :class="showFilters ? 'absolute flex z-10 bg-white pt-8 lg:pt-0' : 'hidden'"
  >
    <UnstyledButton class="absolute top-0 right-4 lg:hidden" @click="showFilters = false">
      <BaseBodyText class="underline">Close</BaseBodyText>
    </UnstyledButton>
    <input
      v-model="query"
      type="text"
      class="w-full px-2 text-base border border-solid rounded-md border-px border-nuts-neutral-400"
    />
    <div
      v-for="[facet, facetGroup] in facetGroupsByKey"
      :key="facet"
      v-show="hasFacetOptions(facetGroup)"
      class="flex flex-col gap-1.5 overflow-scroll max-h-60 w-full"
    >
      <Header6 class="mb-2 uppercase">{{ createFacetLabel(facet) }}</Header6>
      <label v-for="(matchCount, key) in facetGroup.options" :key="key">
        <input
          type="checkbox"
          :checked="facetGroup.selections.has(key)"
          @change="onFacetChange($event, facet, key)"
        />
        {{ key }} ({{ matchCount }})
      </label>
    </div>
  </div>

  <div
    class="fixed z-10 transition-transform duration-150 -translate-x-1/2 lg:translate-y-full bottom-8 lg:-bottom-full left-1/2"
    :class="showFilters ? 'hidden' : 'block'"
  >
    <button
      type="button"
      class="px-4 py-2 text-white transition duration-300 rounded-md drop-shadow-md bg-nuts-neutral-400 focus:bg-nuts-neutral-200 hover:bg-nuts-neutral-200 hover:text-black focus:text-black"
      @click="showFilters = true"
    >
      Show Filters
    </button>
  </div>
</template>
