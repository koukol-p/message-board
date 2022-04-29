<template>
  <form class="form-container" @submit.prevent="handleSubmit">
    <div class="input-group">
      <label for="username">User name:</label>
      <input id="username" type="text" required v-model="username" />
    </div>

    <div class="input-group">
      <label for="email">Email:</label>
      <input id="email" type="email" required v-model="email" />
    </div>

    <div class="input-group">
      <label for="password">Password:</label>
      <input id="password" type="password" required v-model="password" />
    </div>
    <Button theme="primary" type="submit">Sign Up</Button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import Button from "@/components/shared/Button.vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const username = ref("");
const email = ref("");
const password = ref("");

const router = useRouter();
const store = useStore();

const handleSubmit = async () => {
  try {
    await store.dispatch("signup", {
      email: email.value,
      password: password.value,
      displayName: username.value,
    });
    router.push("/");
  } catch (err) {
    console.log(error.message);
  }
};
</script>

<style scoped lang="scss"></style>
