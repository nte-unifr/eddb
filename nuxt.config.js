import { resolve } from 'path'

export default {
  target: 'static',
  router: {
    base: '/' + process.env.PROJECT,
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
  },
  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-property-in-object', { loose: true }]],
    }
  },
  alias: {
    'repositories': resolve(__dirname, './repositories')
  }
}