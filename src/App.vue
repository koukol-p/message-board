<script setup>
import Sidebar from "./components/shared/Sidebar.vue";
</script>

<template>
  <div class="main-container">
    <Sidebar />
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import "./assets/base.scss";
.main-container {
  display: grid;

  grid-template-columns: 3fr 9fr;

  height: 100vh;
}
</style>
