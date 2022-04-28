<template>
    <button @click="$emit('click')"><slot></slot></button>
</template>

<script setup>
const props = defineProps({
    type: String,
    theme: String, 
})


</script>

<style scoped>
    button {
        border: 0;
        padding: 6px 4px;
        border-radius: 6px;
        background-color:  rgb(27, 124, 75);
        color: white;
        font-weight: bold;
        box-shadow: 1px 2px 3px rgb(0,0,0,0.1)
    }
</style>