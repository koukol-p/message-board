<template>
  <div>
    Main View
    <button @click="handleLogout">LogOut</button>
  </div>
</template>

<script setup>
import { onAuthStateChanged } from "@firebase/auth";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { projectAuth } from "../firebase/config";

const store = useStore();
const router = useRouter();

const handleLogout = () => {
  try {
    store.dispatch("logout");
  } catch (err) {
    console.log(err);
  }
};
onAuthStateChanged(projectAuth, (user) => {
  if (!user) {
    router.push("/auth");
  }
});
</script>

<style lang="scss" scoped></style>
