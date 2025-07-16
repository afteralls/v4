import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  devServer: { port: 3900 },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Nuxt v4',
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
