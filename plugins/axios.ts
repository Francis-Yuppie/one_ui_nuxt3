import axios from 'axios'

//@ts-ignore
export default defineNuxtPlugin((nuxtApp) => {
  const api = axios.create({
    baseURL: 'https://api.afya365.com/v1/'
  })

  nuxtApp.provide('axios', api)
})
