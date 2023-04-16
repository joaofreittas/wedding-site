export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'wedding-confirmation',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
  ],
  serverMiddleware: [
    { path: '/api', handler: '~/api/routes.js' }
  ],
  plugins: [
    '~/plugins/api-client.js',
    { src: '~/plugins/vueClipboard2.js', mode: 'client' },
  ],
  components: true,
  buildModules: [
  ],
  modules: [
    'bootstrap-vue/nuxt',
    'nuxt-clipboard'
  ],
  build: {
  },
  clipboard: {
    autoSetContainer: true
  },
  bootstrapVue: {
    icons: true
  }
}
