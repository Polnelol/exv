module.exports = {
  /*
  ** Headers of the page
  */
  modules: [
    '@nuxtjs/markdownit'
  ],

  // [optional] markdownit options
  // See https://github.com/markdown-it/markdown-it
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    use: [
      // ['markdown-it-container', containerName],
      // 'markdown-it-attrs'
    ]
  },
  head: {
    title: 'exv',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800', rel: 'stylesheet'},
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,700,400italic|Material+Icons' }
    ]
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */

 css: [
  { src: 'vue-material/dist/vue-material.min.css', lang: 'css' },
  { src: '~/assets/theme.scss', lang: 'scss' } // include vue-material theme engine
],
plugins: [
  { src: '~/plugins/vue-material' }
],
  build: {

    vendor : ['axios"', 'vue-material'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

