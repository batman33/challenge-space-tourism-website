// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api',
      trailingSlash: false,
    }
  },
  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1.0',
      title: 'Frontend Mentor | Space tourism website',
      link: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon.png' },

        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous'},
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700&family=Bellefair&family=Barlow:wght@400;700&display=swap' }
      ],
      meta: [
        // <meta name="description" content="My amazing site">
        // { name: 'description', content: 'My amazing site.' }
      ],
    }
  },
  css: [
    '~/assets/css/main.scss'
  ],
})
