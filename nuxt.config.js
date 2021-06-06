export default {
  components: true,
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