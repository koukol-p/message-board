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

onAuthStateChanged(projectAuth, (user) => {
  if (!user) {
    router.push("/auth");
  }
});
</script>

<style lang="scss" scoped>
.main-page {
  overflow-y: scroll;
  margin: 0;
}
</style>
