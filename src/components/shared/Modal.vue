<template>
  <div class="modal-backdrop" @click.self="handleClose">
    <div class="modal-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["closeModal"]);
const handleClose = () => {
  emit("closeModal");
};
</script>

<style lang="scss" scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 50;

  .modal-content {
    margin: 40px auto;
  }
}
</style>
