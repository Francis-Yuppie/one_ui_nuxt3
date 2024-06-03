<script setup lang="ts">
// import { defineProps, defineEmits } from "vue";

interface InputProps {
  label?: string;
  id: string;
  type?: string;
  required?: boolean;
  modelValue: string | number;
  name: string;
  disabled?: boolean;
  name?: string,
  placeholder?: string
}

const props = defineProps<InputProps>();
const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get() {
    return props.modelValue;
  },

  set(value: any) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
	<input
		:type="type"
        :id="id"
        :disabled="disabled"
	    class="form-control form-control-lg form-control-alt"
	    :name="name"
	    :placeholder="placeholder"
	    v-model="value"
    />
	
</template>

<style scoped>
</style>