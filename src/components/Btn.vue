<template>
  <button class="btn" :class="color" @click="$emit('action')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BtnComponent',
  props: {
    color: {
      type: String,
      default: '',
      validator(val) {
        return ['', 'primary', 'danger'].includes(val);
      },
    },
  },
  emits: ['action'],
};
</script>

<style></style>
