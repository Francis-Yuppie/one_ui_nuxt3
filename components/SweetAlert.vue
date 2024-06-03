<template>
    <div></div> <!-- Your SweetAlert content here -->
  </template>
  
  <script setup>
  import Swal from 'sweetalert2';
  
  const showSweetAlert = (title, text, icon) => {
    Swal.fire({
      title,
      text,
      icon
    });
  };
  </script>
  