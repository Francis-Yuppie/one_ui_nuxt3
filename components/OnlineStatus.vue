<script>
import Swal from "sweetalert2";
import { computed } from 'vue'
// import { useOnline } from '@vueuse/core'


export default {
  data() {
    return {
      initialOnline: null,
    };
  },
  created() {
    setTimeout(() => {
      this.checkInitialOnlineStatus();
    }, 500);
  },
  methods: {
    checkInitialOnlineStatus() {
      this.initialOnline = navigator.onLine;
      if (!this.initialOnline) {
        this.showMessage("You are offline!");
      }
    },
    updateOnlineStatus() {
      if (this.initialOnline === null) {
        // Initial online status check hasn't been performed yet
        return;
      }

      const currentOnline = navigator.onLine;
      if (currentOnline !== this.online) {
        if (currentOnline) {
          this.showMessage("Back online");
        } else {
          this.showMessage("You are offline!");
        }
      }
    },
    showMessage(msg) {
      Swal.fire({
        title: 'Online Status',
        text: msg,
        icon: "info",
        position: "top",
        timer: 5000,
        toast: true,
        showConfirmButton: false,
      });
    },
  },
  mounted() {
    window.addEventListener("online", this.updateOnlineStatus);
    window.addEventListener("offline", this.updateOnlineStatus);
  },
  beforeUnmount() {
    window.removeEventListener("online", this.updateOnlineStatus);
    window.removeEventListener("offline", this.updateOnlineStatus);
  },
};

 

</script>

<template></template>

<style>
.swal2-popup {
  border-radius: 10px !important;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2) !important;
  width: 45vw !important;
  height: 150px !important;
}
/*.swal2-popup .swal2-icon,
.swal2-popup .swal2-content {
  display: inline-block ;
   vertical-align: middle !important; 
}*/
</style>
