<script setup>
import { computed, onMounted } from "vue";
import { useMainStore } from "@/store/index";
import OnlineStatus from '~/components/OnlineStatus.vue';
import { useIdleTimer } from '~/composables/useIdleTimer'
import { useAuthStore } from "~/stores/userAuth";


// Import all layout partials
import BaseHeader from "@/layouts/partials/Header.vue";
import BaseSidebar from "@/layouts/partials/Sidebar.vue";
import BaseFooter from "@/layouts/partials/Footer.vue";

const authStore = useAuthStore()

// logouts the user if they are idle

if(authStore.user.isAuthenticated){
  useIdleTimer()
}
 
// Component properties
defineProps({
  sidebarWithMiniNav: {
    type: Boolean,
    default: false,
    description: "If the sidebar is in Mini Nav Mode",
  },
  components: {
    OnlineStatus
  },
});

// Main store
const store = useMainStore();

// Render main classes based on store options
const classContainer = computed(() => {
  return {
    "sidebar-r": store.layout.sidebar && !store.settings.sidebarLeft,
    "sidebar-mini": store.layout.sidebar && store.settings.sidebarMini,
    "sidebar-o": store.layout.sidebar && store.settings.sidebarVisibleDesktop,
    "sidebar-o-xs": store.layout.sidebar && store.settings.sidebarVisibleMobile,
    "sidebar-dark": store.layout.sidebar && store.settings.sidebarDark,
    "page-header-fixed": store.layout.header && store.settings.headerFixed,
    "page-header-dark": store.layout.header && store.settings.headerDark,
    "side-trans-enabled": store.settings.sideTransitions,
    "side-scroll": true,
  };
});

// Remove side transitions on window resizing
onMounted(() => {
  let winResize = false;
  window.addEventListener("resize", () => {
    clearTimeout(winResize);
    store.setSideTransitions({ transitions: false });
    winResize = setTimeout(() => {
      store.setSideTransitions({ transitions: true });
    }, 500);
  });
});
</script>

<template>
  <div id="page-container" :class="classContainer">
    
    <!-- Sidebar -->
    <BaseSidebar
      v-if="store.layout.sidebar"
      :with-mini-nav="sidebarWithMiniNav"
    >
      <template #header>
        <slot name="sidebar-header"></slot>
      </template>

      <template #content>
        <slot name="sidebar-content"></slot>
      </template>

      <slot name="sidebar"></slot>
    </BaseSidebar>
    <!-- END Sidebar -->

    <!-- Header -->
    <BaseHeader v-if="store.layout.header">
      <template #content-left>
        <slot name="header-content-left"></slot>
      </template>

      <template #content-right>
        <slot name="header-content-right"></slot>
      </template>

      <template #content>
        <slot name="header-content"></slot>
      </template>
      <slot name="header"></slot>
    </BaseHeader>
    <!-- END Header -->

    <!-- Main Container -->
    <div id="main-container">
      <slot name="page-top-content"></slot>
      <NuxtPage />
      <OnlineStatus/>
    </div>
    <!-- END Main Container -->

    <!-- Footer -->
    <BaseFooter v-if="store.layout.footer">
      <template #content-left>
        <slot name="footer-content-left"></slot>
      </template>

      <template #content-right>
        <slot name="footer-content-right"></slot>
      </template>
      <slot name="footer"></slot>
    </BaseFooter>
    <!-- END Footer -->
  </div>
</template>
