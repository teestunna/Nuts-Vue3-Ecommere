// eslint-disable-next-line import/no-extraneous-dependencies
import { type SearchOptions } from '@algolia/client-search';
import { computed, ref, watch } from 'vue';

import { facets, type SearchVariantResult, searchVariants } from '@/utils/search/products';

export interface FacetGroup {
  options: Record<string, number>;
  selections: Set<string>;
}

export const useSearchVariants = () => {
  const facetGroupsByKey = ref(
    new Map<string, FacetGroup>(
      facets.map((facet) => [
        facet,
        {
          options: {},
          selections: new Set(),
        },
      ]),
    ),
  );
  const query = ref('');
  const results = ref<SearchVariantResult>();

  const facetFilters = computed<SearchOptions['facetFilters']>(() => {
    const filters: string[] = [];
    facetGroupsByKey.value.forEach(({ selections }, facet) => {
      if (selections.size === 0) return;
      selections.forEach((selection) => {
        filters.push(`${facet}:${selection}`);
      });
    });
    return filters;
  });

  watch([query, facetFilters], async () => {
    const searchOptions: SearchOptions = {
      attributesToHighlight: [],
      facetFilters: facetFilters.value,
      filters: 'traits:searchable',
    };
    results.value = await searchVariants(query.value, searchOptions);
    facetGroupsByKey.value.forEach((entry, facet) => {
      let options = results.value?.facets?.[facet];
      if (!options) options = {};
      if (Object.keys(options).length === 0) {
        Array.from(entry.selections)
          .sort()
          .forEach((selection) => {
            options![selection] = 0;
          });
      }
      // eslint-disable-next-line no-param-reassign
      entry.options = options;
    });
  });

  return {
    facetGroupsByKey,
    query,
    results,
  };
};
