export default {
  target: 'static',
  router: {
    base: '/nightly',
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/fiche/:id',
        redirect: '/item/:id'
      })
    }
  },
  components: true,
  head: {
    title: process.env.PROJECT_TITLE + ' - Educational Databases - Université de Fribourg',
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