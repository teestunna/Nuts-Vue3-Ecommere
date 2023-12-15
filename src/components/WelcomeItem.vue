<template>
  <div class="relative flex mt-8 item lg:mt-0 lg:pl-20 lg:pt-1.5 lg:pb-4">
    <i
      class="flex w-8 h-8 icon place-items-center place-content-center lg:w-12 lg:h-12 lg:absolute lg:rounded-lg"
    >
      <slot name="icon" />
    </i>
    <div class="flex-1 ml-4">
      <h3 class="header-color font-medium mb-1.5 text-xl">
        <slot name="heading" />
      </h3>
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-color {
  color: var(--color-heading);
}

.icon {
  color: var(--color-text);
}

@media (min-width: 1024px) {
  .icon {
    top: calc(50% - 25px);
    left: -26px;
    border: 1px solid var(--color-border);
    background: var(--color-background);
  }

  .item {
    &:before,
    &:after {
      content: ' ';
      border-left: 1px solid var(--color-border);
      position: absolute;
      left: 0;
      height: calc(50% - 25px);
      --vertical-offset: calc(50% + 25px);
    }
    &:before {
      bottom: var(--vertical-offset);
    }
    &:after {
      top: var(--vertical-offset);
    }

    &:first-of-type:before,
    &:last-of-type:after {
      display: none;
    }
  }
}
</style>
