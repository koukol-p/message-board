<template>
<div class="container">
    <SignupForm></SignupForm>
    <LoginForm />
</div>
</template>

<script setup>
import SignupForm from "@/components/SignupForm.vue"
import LoginForm from "@/components/LoginForm.vue"
import { useStore } from "vuex";

</script>

<style>
.container {
    display: flex;
    
    justify-content: center;
    align-content: center;
    padding-top: 40px;
    height: 100%;

}

</style>