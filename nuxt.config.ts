import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  srcDir: 'client/',

  app: {
    head: {
      title: process.env.npm_package_name || '',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],

    },
    keepalive: true
  },

  css: [
    '@/assets/css/main.css',
    '@/assets/css/device.css',

  ],

  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */

  /**
   * @see https://v3.nuxtjs.org/api/configuration/nuxt.config#modules
   */
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins.push(vuetify({ autoImport: false }))
      })
    },
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/i18n'
  ],

  i18n: {
    lazy: true,
    langDir: 'lang',
    strategy: 'prefix',
    defaultLocale: 'en', // default locale of your project for Nuxt pages and routings
    locales: [{ code: 'en', language: 'en-US', file: 'en.ts' }, { code: 'fa', language: 'fa', file: 'fa.ts' }],
  },

  pinia: {
    autoImports: [
      'defineStore', // import { defineStore } from 'pinia'
    ],
  },

  /**
   * @see https://v3.nuxtjs.org/guide/features/runtime-config#exposing-runtime-config
   */
  runtimeConfig: {
    public: {
      baseURL: process.env.APP_URL || 'http://hrformula.ir',
      webURL: process.env.WEB_URL || 'http://hrformula.ir',
      apiURL: process.env.API_URL || 'http://hrformula.ir/api',
    },
  },

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },

  build: {

    extend(config, { isDev, isClient }) {
      // ..
      config.module.rules.push({
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader',
      })
      // Sets webpack's mode to development if `isDev` is true.
      if (isDev)
        config.mode = 'development'
    },
    transpile: ['vuetify'],
  },

  "types": [
    // ...
    "@pinia/nuxt"
  ],

  compatibilityDate: '2024-08-04',

  devtools: {
    enabled: true
  }
})
