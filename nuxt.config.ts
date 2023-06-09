// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ['@sidebase/nuxt-auth'],

  auth:{
    origin:process.env.ORIGIN,
    basePath:'api/auth'
  }

});
