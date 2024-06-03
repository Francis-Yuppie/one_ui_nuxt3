<script setup >
import Swal from "sweetalert2";

const showAlert = () => {
    // const { $swal } = useNuxtApp()
    Swal.fire({
      title: 'Hello',
      text: 'This is a test SweetAlert!',
      icon: 'success',
    });
  }
</script>

<template>
    <button @click="showAlert">Show SweetAlert</button>
</template>

<style scoped>
.swal2-popup {
  border-radius: 10px !important;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2) !important;
  width: 45vw !important;
  height: 150px !important;
}
</style>
  