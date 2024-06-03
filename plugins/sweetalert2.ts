import Swal, { type SweetAlertInput, type SweetAlertOptions } from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

const options = {}
// const options: SweetAlertInput = {}

const $swal = {
    install: (Vue: any, options: SweetAlertOptions) => {
        Vue.provide('$swal', Swal.mixin(options))
    }
}
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use($swal, options)
});