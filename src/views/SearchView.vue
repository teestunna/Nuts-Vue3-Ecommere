<script setup lang="ts">
import Header3 from '@/components/base/typography/Header3.vue';
import Header6 from '@/components/base/typography/Header6.vue';
import TheRefinements from '@/components/search/TheRefinements.vue';
import { useSearchVariants } from '@/composables/search/useSearchVariants';
import { computed, ref } from 'vue';

const { facetGroupsByKey, query, results } = useSearchVariants();
</script>

<template>
  <main class="py-8 lg:py-16 min-h-[80vh] px-4 relative">
    <Header3 headerTag="h1">Search</Header3>

    <div v-if="results" style="display: flex; justify-content: end;">Total: {{ results.nbHits }}</div>
    <div v-else style="display: flex;">Total: 0</div>

    <div class="flex items-start gap-4 mt-4">
      <TheRefinements v-model="facetGroupsByKey" v-model:query="query" />

      <div v-if="results && results?.hits.length > 0" class="grid w-full grid-cols-3 gap-12 lg:w-3/4">
        <div v-for="variant in results?.hits" :key="variant.objectID">
          <img
            :src="variant.Product.listingImageUrl"
            :alt="variant.Product.name"
            class="object-contain"
          />
          <button class="my-2 add-to-cart">
            <Header6>Add to cart</Header6>
          </button>
          <Header6>{{ variant.Product.name }}</Header6>
          <Header6 class="product-review">
            Count: {{ variant.Product.reviews.count }}
          </Header6>
          <Header6 class="product-review">
            Rating: {{ variant.Product.reviews.averageRating }}
          </Header6>
          <Header6 style="color: blue" class="mt-2">${{ variant.prices[0].value.centAmount / 100 }}</Header6>
          <Header6 class="mt-2">
            Save 5% with Auto-Delivery
          </Header6>
        </div>
      </div>

      <div v-else class="grid w-full grid-cols-3 gap-12 lg:w-3/4">
        There are currently no results for your search.
      </div>
    </div>
  </main>
</template>


<style scoped>

  .object-contain {
    height: 200px;
    width: 200px;
  }

  .add-to-cart {
    color: #fff;
    background: green; 
    height: 30px;
    width: 200px; 
    border-radius: 4px; 
    display: flex; 
    justify-content: center;
    align-items: center;
  }
</style>
