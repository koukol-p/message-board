<script setup>
import Navbar from "./components/shared/Navbar.vue";
</script>

<template>
  <div class="main-container">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import "./assets/base.scss";
.main-container {
  display: grid;

  grid-template-rows: 1fr auto;

  height: 100vh;
}
</style>
