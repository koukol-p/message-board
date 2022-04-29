<template>
  <form class="form-container" @submit.prevent="handleSubmit">
    <div class="input-group">
      <label for="email">Email:</label>
      <input id="email" type="email" required v-model="email" />
    </div>

    <div class="input-group">
      <label for="password">Password:</label>
      <input id="password" type="password" required v-model="password" />
    </div>
    <Button theme="primary" type="submit">Log In</Button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import Button from "@/components/shared/Button.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");

const store = useStore();
const router = useRouter();

const handleSubmit = async () => {
  try {
    await store.dispatch("login", {
      email: email.value,
      password: password.value,
    });
    router.push("/");
  } catch (err) {
    console.log(err.message);
  }
};
</script>

<style scoped lang="scss"></style>
