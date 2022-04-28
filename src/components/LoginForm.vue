<template>
    <form>
        <div class="input-group">
            <label for="email">Email:</label>
            <input id="email" type="email" required v-model="email">
        </div>
        
        <div class="input-group">
            <label for="password">Password:</label>
            <input id="password" type="password" required v-model="password">
        </div>
        <Button type="submit">Log In</Button>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import Button from "@/components/shared/Button.vue"

const email = ref("")
const password = ref("")
</script>

<style scoped lang="scss">
    form {
        display: flex;
        flex-direction: column;
        
        min-width: 210px;
        background-color: yellow;
        padding: 1.5rem;
        border-radius: 1rem;
        box-shadow: 2px 4px 6px rgba(0,0,0,0.2);
        
    }
    
    
</style>
