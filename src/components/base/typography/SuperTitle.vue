<template>
  <p class="font-bold uppercase super-title font-sofia-pro md:text-xs">
    <slot />
  </p>
</template>

<style scoped lang="scss">
.super-title {
  @media (max-width: 768px) {
    font-size: 10px;
    line-height: 14px;
  }
}
</style>
