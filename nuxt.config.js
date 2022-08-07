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
	  { hid: 'keywords', name: 'keywords', content: 'mirko, pani, sviluppo, sviluppatore, development, software, vicenza, veneto, asp.net, blazor, c#, angular, blog, it' },
	  { name:'robots', content:'index, follow'},
      { property: "og:site_name", content: "Mirko Pani Portfolio" },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://mirkopani.me"
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Mirko Pani Portfolio"
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "My own portfolio as a software developer"
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "/banner.png"
      },
      { property: "og:image:width", content: "740" },
      { property: "og:image:height", content: "300" },
      { name: "twitter:site", content: "@MirkoPDev" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: "https://mirkopani.me",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "Mirko Pani Portfolio"
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: "My own portfolio as a software developer"
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "/banner.png"
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        hid: "canonical",
        rel: "canonical",
        href: "https://mirkopani.me"
      }
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
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
	  '@nuxtjs/i18n',
	  '@nuxtjs/sitemap',
    '@nuxt/content'
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
  },
  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536,
    },
    presets: {
      preview: {
        modifiers: {
          fit: 'cover',
          format: 'jpg',
          width: 400,
          height: 300,
        },
      },
    },
  }
}
