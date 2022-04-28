<template>
    <form class="form-container">
        <div class="input-group">
            <label for="email">Email:</label>
            <input id="email" type="email" required v-model="email">
        </div>
        
        <div class="input-group">
            <label for="password">Password:</label>
            <input id="password" type="password" required v-model="password">
        </div>
        <Button theme="secondary" type="submit">Log In</Button>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import Button from "@/components/shared/Button.vue"

const email = ref("")
const password = ref("")
</script>

<style scoped lang="scss">

</style>
