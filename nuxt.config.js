export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Mirko Pani Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=0.9' },
      { hid: 'description', name: 'description', content: 'Sito portfolio dello sviluppatore software Mirko Pani, Vicenza' },
      { name: 'format-detection', content: 'telephone=no' },
	  { hid: 'keywords', name: 'keywords', content: 'mirko, pani, sviluppo, sviluppatore, development, software, vicenza, veneto, asp.net, blazor, c#' },
	  { name:'robots', content:'index, follow'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
	  '@nuxtjs/i18n',
	  '@nuxtjs/sitemap'
  ],
  i18n: {
	  locales: [
		  {
			  code: 'en',
			  iso: 'en-gb'
		  },
		  {
			  code: 'it',
			  iso: 'it-IT'
		  }
	  ],
	  baseUrl: 'https://mirkopani.me',
	  defaultLocale: 'it',
	  vueI18n: {
		  fallbackLocale: 'it',
		  messages: {

		  }
	  },
	  vueI18nLoader: true,
	  detectBrowserLanguage: {
		useCookie: false,
		cookieKey: 'i18n_redirected',
		redirectOn: 'root',  // recommended
	  }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  router:
  {
	  trailingSlash: undefined
  },
  loading: {
	  color:'blue',
	  height:'5px'
  },
  sitemap: {
	  hostname: 'https://mirkopani.me'
  }
}
