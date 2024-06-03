// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
  	'@pinia/nuxt', 
  	'nuxt-particles', 
  	'@vueuse/nuxt'
  ],
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL || 'https://api.afya365.com/v1/'
    }
  },
  // for this you must install the @nuxt/http Module
  http: {
    baseURL: process.env.BASE_URL || 'https://api.afya365.com/v1/'
  },
  css: [
	  'bootstrap/dist/css/bootstrap.min.css',
	  'sweetalert2/dist/sweetalert2.min.css',
	  '~/assets/css/custom-swal.scss'
  ],
  ssr: false,
  plugins: [
    '~/plugins/sweetalert2.ts',
  ],
});
