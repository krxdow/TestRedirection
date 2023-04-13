// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ['@sidebase/nuxt-auth'],

  auth: {
    //https://sidebase.io/nuxt-auth/configuration/nuxt-config
    isEnabled: true,
    origin: 'http://localhost:3000/',
    basePath: '/api/auth',
  },
});
