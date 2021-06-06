export default {
  target: 'static',
  router: {
    base: '/nightly'
  },
  components: true,
  head: {
    title: process.env.PROJECT_TITLE + ' - Unifr Educational Database',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  css: [
    '~/assets/css/main.scss'
  ],
  modules: [
    '@nuxt/http',
    '@nuxt/content'
  ],
  plugins: [
    '~/plugins/vue-fragment.js',
    '~/plugins/repositories.js',
    '~/plugins/apiarist.js'
  ],
  http: {
    baseURL: process.env.URL + process.env.PROJECT
  },
  publicRuntimeConfig: {
    project: process.env.PROJECT,
    baseURL: process.env.URL + process.env.PROJECT
  }
}