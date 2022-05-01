<template>
  <div class="main-page">
    <Posts />
  </div>
</template>

<script setup>
import { onAuthStateChanged } from "@firebase/auth";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { projectAuth } from "../firebase/config";
import Posts from "../components/Posts.vue";
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

<style lang="scss" scoped>
.main-page {
  overflow-y: scroll;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr auto 1fr;
}
</style>
