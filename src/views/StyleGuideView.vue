<script setup lang="ts">
import BaseBodyText from '@/components/base/typography/BaseBodyText.vue';
import Caption from '@/components/base/typography/Caption.vue';
import Header1 from '@/components/base/typography/Header1.vue';
import Header2 from '@/components/base/typography/Header2.vue';
import Header3 from '@/components/base/typography/Header3.vue';
import Header4 from '@/components/base/typography/Header4.vue';
import Header5 from '@/components/base/typography/Header5.vue';
import Header6 from '@/components/base/typography/Header6.vue';
import LargeBodyText from '@/components/base/typography/LargeBodyText.vue';
import SmallBodyText from '@/components/base/typography/SmallBodyText.vue';
import SuperTitle from '@/components/base/typography/SuperTitle.vue';
</script>

<template>
  <main class="flex flex-col lg:flex-row items-center lg:justify-center gap-16 py-8 lg:py-16">
    <div class="flex flex-col gap-4">
      <Header1>Header 1</Header1>
      <Header2>Header 2</Header2>
      <Header3>Header 3</Header3>
      <Header4>Header 4</Header4>
      <Header5>Header 5</Header5>
      <Header6>Header 6</Header6>
      <SuperTitle>Super Title</SuperTitle>
      <Caption>Caption</Caption>
      <SmallBodyText>Small Body Text</SmallBodyText>
      <BaseBodyText>Base Body Text</BaseBodyText>
      <LargeBodyText>Large Body Text</LargeBodyText>
    </div>

    <div class="flex flex-col gap-4">
      <Header5>Colors</Header5>

      <div class="flex flex-col gap-2">
        <SuperTitle>nuts-amber</SuperTitle>
        <div class="flex items-center gap-4">
          <div class="w-8 h-8 bg-nuts-amber-200" title="nuts-amber-200" />
          <div class="w-8 h-8 bg-nuts-amber-300" title="nuts-amber-300" />
          <div class="w-8 h-8 bg-nuts-amber-400" title="nuts-amber-400" />
          <div class="w-8 h-8 bg-nuts-amber-700" title="nuts-amber-700" />
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <SuperTitle>nuts-cyan</SuperTitle>
        <div class="flex items-center gap-4">
          <div class="w-8 h-8 bg-nuts-cyan-200" title="nuts-cyan-200" />
          <div class="w-8 h-8 bg-nuts-cyan-400" title="nuts-cyan-400" />
          <div class="w-8 h-8 bg-nuts-cyan-600" title="nuts-cyan-600" />
          <div class="w-8 h-8 bg-nuts-cyan-800" title="nuts-cyan-800" />
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <SuperTitle>nuts-emerald</SuperTitle>
        <div class="flex items-center gap-4">
          <div class="w-8 h-8 bg-nuts-emerald-900" title="nuts-emerald-900" />
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <SuperTitle>nuts-lime</SuperTitle>
        <div class="flex items-center gap-4">
          <div class="w-8 h-8 bg-nuts-lime-100" title="nuts-lime-100" />
          <div class="w-8 h-8 bg-nuts-lime-200" title="nuts-lime-200" />
          <div class="w-8 h-8 bg-nuts-lime-600" title="nuts-lime-600" />
          <div class="w-8 h-8 bg-nuts-lime-800" title="nuts-lime-800" />
          <div class="w-8 h-8 bg-nuts-lime-900" title="nuts-lime-900" />
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <SuperTitle>nuts-neutral</SuperTitle>
        <div class="flex items-center gap-4">
          <div class="w-8 h-8 bg-nuts-neutral-100" title="nuts-neutral-100" />
          <div class="w-8 h-8 bg-nuts-neutral-200" title="nuts-neutral-200" />
          <div class="w-8 h-8 bg-nuts-neutral-400" title="nuts-neutral-400" />
          <div class="w-8 h-8 bg-nuts-neutral-700" title="nuts-neutral-700" />
          <div class="w-8 h-8 bg-nuts-neutral-800" title="nuts-neutral-800" />
          <div class="w-8 h-8 bg-nuts-neutral-900" title="nuts-neutral-900" />
          <div class="w-8 h-8 bg-nuts-neutral-950" title="nuts-neutral-950" />
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <SuperTitle>nuts-orange</SuperTitle>
        <div class="flex items-center gap-4">
          <div class="w-8 h-8 bg-nuts-orange-50" title="nuts-orange-50" />
          <div class="w-8 h-8 bg-nuts-orange-100" title="nuts-orange-100" />
          <div class="w-8 h-8 bg-nuts-orange-300" title="nuts-orange-300" />
          <div class="w-8 h-8 bg-nuts-orange-400" title="nuts-orange-400" />
          <div class="w-8 h-8 bg-nuts-orange-600" title="nuts-orange-600" />
          <div class="w-8 h-8 bg-nuts-orange-950" title="nuts-orange-950" />
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <SuperTitle>nuts-red</SuperTitle>
        <div class="flex items-center gap-4">
          <div class="w-8 h-8 bg-nuts-red-200" title="nuts-red-200" />
          <div class="w-8 h-8 bg-nuts-red-800" title="nuts-red-800" />
          <div class="w-8 h-8 bg-nuts-red-900" title="nuts-red-900" />
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <SuperTitle>nuts-sky</SuperTitle>
        <div class="flex items-center gap-4">
          <div class="w-8 h-8 bg-nuts-sky-50" title="nuts-sky-50" />
          <div class="w-8 h-8 bg-nuts-sky-100" title="nuts-sky-100" />
          <div class="w-8 h-8 bg-nuts-sky-300" title="nuts-sky-300" />
          <div class="w-8 h-8 bg-nuts-sky-400" title="nuts-sky-400" />
          <div class="w-8 h-8 bg-nuts-sky-600" title="nuts-sky-600" />
          <div class="w-8 h-8 bg-nuts-sky-800" title="nuts-sky-800" />
          <div class="w-8 h-8 bg-nuts-sky-950" title="nuts-sky-950" />
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <SuperTitle>nuts-stone</SuperTitle>
        <div class="flex items-center gap-4">
          <div class="w-8 h-8 bg-nuts-stone-100" title="nuts-stone-100" />
        </div>
      </div>
    </div>
  </main>
</template>
