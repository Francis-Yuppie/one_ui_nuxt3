<script setup>
import { useAuthStore } from "~/stores/userAuth";

const authStore = useAuthStore();

onMounted(() => {
  authStore.initStore();
});

</script>

<template>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
</template>


<style lang="scss">
	@import "@/assets/scss/main";
</style>
