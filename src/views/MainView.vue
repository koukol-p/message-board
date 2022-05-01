<template>
  <div>
    Main View
    <button @click="handleLogout">LogOut</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();

const handleLogout = () => {
  try {
    store.dispatch("logout");
  } catch (err) {
    console.log(err);
  }
};
</script>

<style lang="scss" scoped></style>
