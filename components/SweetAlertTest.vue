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

</style>
  