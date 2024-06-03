// middleware/authLayout.js
export default defineNuxtRouteMiddleware(({ to, from }) => {
    const authRoutes = [
      '/signin2View',
      '/signin'
    ];
    if (authRoutes.includes(to.path)) {
      to.meta.layout = 'AuthLayout';
    }
  });
  



