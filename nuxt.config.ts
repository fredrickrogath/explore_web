// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  devtools: { enabled: true },
  modules: [ '@element-plus/nuxt', '@vueuse/nuxt', '@nuxtjs/tailwindcss', 'nuxt-icon', '@pinia/nuxt', 'nuxt-mapbox',],  elementPlus: { /** Options */ },
  plugins: ['~/plugins/gsap', { src : '~/plugins/vue-apexchart.client.js', ssr : false }],
  build: {
    vendor : [
       'vue-apexchart'
    ],
    transpile: ['vuetify'],
  },
  server: {
    host: "0.0.0.0"
  },
  
  app: {
    head: {
      // link: [
      //   {
      //     rel: "stylesheet",
      //     href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap",
      //   },
      // ],
      title: 'EXPLORE LAROSA',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Your page description goes here. Keep it concise and relevant to your content.' },
        { name: 'keywords', content: 'Keyword1, Keyword2, Keyword3' },
        { name: 'author', content: 'Your Name or Your Company Name' },
        { property: 'og:title', content: 'Your Page Title' },
        { property: 'og:description', content: 'Your page description for social media sharing.' },
        { property: 'og:image', content: 'URL to an image representing your page' },
        { property: 'og:url', content: 'URL to the page on your website' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@YourTwitterHandle' },
        { name: 'twitter:title', content: 'Your Page Title' },
        { name: 'twitter:description', content: 'Your page description for Twitter sharing.' },
        { name: 'twitter:image', content: 'URL to an image representing your page' },
        { name: 'robots', content: 'index, follow' },
        { rel: 'canonical', href: 'URL to the canonical version of this page' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'ozula.jpg' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&family=Roboto+Mono:wght@100;300;400;500;700;900&display=swap',
        },
        // {
        //   rel: 'stylesheet',
        //   href: 'https://vjs.zencdn.net/8.10.0/video-js.css'
        // },
      ],

    }
  }
})
