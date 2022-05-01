<template>
  <div class="main-page">
    <button @click="formOpen = !formOpen">Toggle form</button>
    <Modal @close-modal="formOpen = false" v-if="formOpen"><PostForm /></Modal>
    <Posts />
  </div>
</template>

<script setup>
import { onAuthStateChanged } from "@firebase/auth";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { projectAuth } from "../firebase/config";
import Posts from "../components/Posts.vue";
import PostForm from "../components/PostForm.vue";
import { ref } from "vue";
import Modal from "../components/shared/Modal.vue";
const store = useStore();
const router = useRouter();

const formOpen = ref(false);
const formToggle = () => {
  formOpen.value = !formOpen.value;
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
  margin: 0;
}
</style>
