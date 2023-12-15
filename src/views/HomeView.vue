<script setup lang="ts">
import BaseBodyText from '@/components/base/typography/BaseBodyText.vue';
import Header1 from '@/components/base/typography/Header1.vue';
import Header3 from '@/components/base/typography/Header3.vue';
import LargeBodyText from '@/components/base/typography/LargeBodyText.vue';
</script>

<template>
  <main class="flex flex-col items-center justify-center px-8 py-16 lg:py-32 min-h-[80vh] gap-4">
    <Header1 class="underline">Senior Vue.js Engineer Dev Test</Header1>
    <Header3 class="italic">Instructions</Header3>
    <LargeBodyText>Hello, and welcome to the dev test 👋</LargeBodyText>
    <BaseBodyText class="max-w-xl">
      This test is designed to give you a chance to show off your skills in a way that is similar to
      how you would work on a day-to-day basis. We want to see how you approach problems, how you
      communicate, and how you work with others.
    </BaseBodyText>
    <BaseBodyText class="max-w-xl">
      We expect this test to take between 1-2 hours of your time, as part of the on-site (or
      virtual) interview. You will be asked to share your screen and walk us through your solution,
      and we will ask you questions about your approach.
    </BaseBodyText>

    <Header3 class="italic">The Task</Header3>
    <BaseBodyText class="max-w-xl">
      You will be working on a search page modeled after an unfiltered search on
      <a href="https://nuts.com/search/instant" target="_blank" class="link">our production e-commerce site</a>,
      <strong>but styled closer to our PLP grid layout</strong> (<span class="italic">
        <a href="https://nuts.com/nuts/almonds" target="_blank" class="link">example</a>
      </span>). This dev test has a basic search
      page already set up with a search client and the necessary components. You can use the
      <a
        href="https://www.algolia.com/doc/api-reference/api-methods/search/"
        target="_blank"
        class="link"
      >
        Algolia documentation
      </a>
      to help you complete this task.
    </BaseBodyText>
    <BaseBodyText class="max-w-xl">
      Your task is to add several missing features to
      <RouterLink to="/search" class="link">the search page</RouterLink>:
    </BaseBodyText>
    <BaseBodyText class="max-w-xl">
      <ul class="list-disc list-inside flex flex-col gap-2">
        <li>Add pagination</li>
        <li>Display the number of results</li>
        <li>Add pricing</li>
        <li>Add sorting options</li>
        <li>Support no results state</li>
        <li>
          Improve the rough UI:
          <ul class="list-disc list-inside flex flex-col gap-2 mt-2 ml-8">
            <li>consistency across tiles; feel free to add your own flair</li>
            <li>presentation of the refinement checkboxes / labels</li>
          </ul>
        </li>
      </ul>
    </BaseBodyText>
  </main>
</template>

<style lang="scss" scoped>
.link {
  @apply text-nuts-lime-800 font-semibold underline;

  &[target='_blank'] {
    @apply text-nuts-amber-700;
  }
}
</style>
