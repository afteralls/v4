<template>
  <div class="text-[5rem] bg-green-300 text-shadow-green-700 max-md:text-[2rem]">
    <h1>Nuxt v4 SSR Performance Test</h1>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Nuxt V4',
  htmlAttrs: { lang: 'en' },
  meta: [{ name: 'description', content: 'Just Nuxt v4 + Tailwind v4 Test project' }],
})
</script>

<style>
div {
  font-family: 'Marmelad', sans-serif;
  @apply flex text-center justify-center items-center w-dvw h-dvh;
}
</style>
