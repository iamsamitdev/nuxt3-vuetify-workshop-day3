// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    build: {
      transpile: ["vuetify"],
    },
    app: {
      head: {
        htmlAttrs: {
          lang: 'en'
        },
        bodyAttrs: {
          class: 'demo'
        },
        charset: 'utf-8',
        titleTemplate: '%s - Nuxt 3 Vuetify',
        meta: [
          { 
            name: 'viewport', 
            content: 'width=device-width, initial-scale=1, maximum-scale=5'
          },
          {
            name: 'author',
            content: "IT Genius Engineering Ltd., Thailand"
          },
        ]
      }
    },
    css: ["@/assets/scss/style.scss"],
    vite: {
      define: {
        "process.env.DEBUG": false,
      },
    },
  });