<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <div>
    <h1 class="green text-5xl relative -top-2.5 font-medium text-center lg:text-left">{{ msg }}</h1>
    <h3 class="text-xl text-center lg:text-left">
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener" class="green">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener" class="green">Vue 3</a>. What's
      next?
    </h3>
  </div>
</template>
