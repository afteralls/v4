<template>
  <div class="flex flex-col gap-3 w-dvw h-dvh bg-green-300 text-green-900">
    <h1 class="text-[5rem] max-md:text-[2rem]">Nuxt v4 SSR Performance Test</h1>
    <span class="text-[2rem] max-md:text-[1rem]">with @nuxt/fonts & Tailwind v4</span>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Nuxt V4',
  htmlAttrs: { lang: 'en' },
  meta: [
    { name: 'description', content: 'Just Nuxt v4 + Tailwind v4 Test project' },
    { name: 'theme-color', content: '#7bf1a7' },
  ],
})
</script>

<style>
div {
  font-family: 'Marmelad', sans-serif;
  @apply text-center justify-center items-center;
}
</style>
