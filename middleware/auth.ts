import { useAuthStore } from "~/stores/userAuth";


const authStore = useAuthStore()



export default defineNuxtRouteMiddleware(( to, from ) => {

  if (!authStore.user.isAuthenticated && to.path !== '/auth') {
    	return navigateTo('/auth');
  }

  // if (authStore.user.isAuthenticated && to.path == '/auth') {
  //   	return navigateTo('/backend/DashboardView');
  // }

});
