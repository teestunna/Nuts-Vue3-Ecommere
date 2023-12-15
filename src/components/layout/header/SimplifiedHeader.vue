<script setup lang="ts">
import logo from '@/assets/yellow_box_logo.svg';
import Caption from '@/components/base/typography/Caption.vue';
import SmallBodyText from '@/components/base/typography/SmallBodyText.vue';
import CashewIcon from '@/components/icons/CashewIcon.vue';
import HiddenLink from '@/components/layout/header/HiddenLink.vue';

withDefaults(
  defineProps<{
    fullWidth?: boolean;
    logoAlt?: string;
    logoImage?: string;
    logoLink?: string;
  }>(),
  {
    fullWidth: false,
    logoAlt: 'Go to Homepage',
    logoLink: '/',
  },
);
</script>

<template>
  <div role="navigation" id="appHeader" class="relative z-10 shadow-b">
    <div
      class="flex items-center justify-between w-full h-16 px-4 mx-auto md:h-20 md:px-10"
      :class="{ '2xl:max-w-screen-2xl': !fullWidth }"
    >
      <HiddenLink to="#skiptocontent">Skip to main content</HiddenLink>
      <div class="flex items-center gap-8">
        <RouterLink :to="logoLink">
          <img :src="logoImage ?? logo" :alt="logoAlt" class="h-9 md:h-14" />
        </RouterLink>
        <slot name="title"></slot>
      </div>
      <slot name="right">
        <div class="flex items-center">
          <CashewIcon class="mr-2" />
          <div>
            <Caption>Need help?</Caption>
            <SmallBodyText>
              <a href="tel:8005586887" class="block tel">800-558-6887</a>
            </SmallBodyText>
          </div>
        </div>
      </slot>
    </div>
  </div>
  <span id="skiptocontent" class="sr-only">Main Content</span>
</template>

<style lang="scss" scoped>
.shadow-b {
  box-shadow: 0px 1px 5px 0px rgb(161 161 161 / 50%);
}
</style>
