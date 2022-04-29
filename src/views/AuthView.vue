<template>
  <div class="container">
    <div class="tabs">
      <button
        @click="isSignup = true"
        :class="{ active: isSignup }"
        class="btn-left"
      >
        Sign Up
      </button>
      <button
        @click="isSignup = false"
        :class="{ active: !isSignup }"
        class="btn-right"
      >
        Log In
      </button>
    </div>
    <div>
      <SignupForm v-if="isSignup" />
      <LoginForm v-if="!isSignup" />
    </div>
  </div>
</template>

<script setup>
import SignupForm from "@/components/SignupForm.vue";
import LoginForm from "@/components/LoginForm.vue";
import { useStore } from "vuex";
import { ref } from "vue";

const isSignup = ref(true);
</script>

<style scoped lang="scss">
@import "@/assets/_variables.scss";
.container {
  margin: 40px auto;
  width: 80%;
}
.tabs {
  display: flex;
  width: 100%;
  align-items: stretch;
  button {
    padding: 16px;
    border: 0;
    flex: 1;
    background-color: $offwhite-d;
    cursor: pointer;
    &.btn-left {
      border-top-left-radius: 6px;
    }
    &.btn-right {
      border-top-right-radius: 6px;
    }
    &.active {
      background-color: $primary-d;
      color: white;
    }
    &:hover {
      background-color: $primary-d;
      color: white;
    }
  }
}
</style>
