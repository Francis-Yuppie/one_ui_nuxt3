<script setup lang="ts">
// import { defineProps } from "vue";

//@ts-ignore
// import clsx from "clsx";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  fullWidth?: boolean;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
}

//@ts-ignore
const props = defineProps<ButtonProps>();
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>