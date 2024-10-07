// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  plugins:['~/plugins/axios.ts'],
  css:[
    'vue-final-modal/style.css'
  ],
  app:{
    head:{
      title: 'UD. Padi Jaya',
      link:[
        {rel: 'icon', type: 'image/png', href: '/iconpj.png'}
      ]
    }
  }
})