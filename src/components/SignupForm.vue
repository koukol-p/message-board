<template>
    <form>
        <div class="input-group">
            <label for="username">User name:</label>
            <input id="username" type="text" required v-model="username">
        </div>
        
        <div class="input-group">
            <label for="email">Email:</label>
            <input id="email" type="email" required v-model="email">
        </div>
        
        <div class="input-group">
            <label for="password">Password:</label>
            <input id="password" type="password" required v-model="password">
        </div>
        <Button type="submit">Sign Up</Button>
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from "@/components/shared/Button.vue"



const username = ref("")
const email = ref("")
const password = ref("")
</script>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
        margin: 4px;
        min-width: 210px;
        background-color: rgb(67, 229, 156);
        padding: 1.5rem;
        border-radius: 1rem;
        box-shadow: 2px 4px 6px rgba(0,0,0,0.2);
        
    }
    
    .input-group {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
    }
    .input-group input {
        border-radius: 2px;
        background-color: rgb(220, 220, 200);
        outline: none;
        border: none;
        margin-left: 4px;
        padding: 4px;
        
    }
</style>