<template>
    <button :type="type" :class="style" @click="$emit('click')"><slot></slot></button>
</template>

<script setup>
const props = defineProps({
    type: String,
    theme: String, 
})
console.log(props)
const style = {
    primary: props.theme === "primary",
    secondary: props.theme === "secondary",
    warning: props.theme === "warning"
}


</script>

<style scoped lang="scss">
@import "@/assets/_variables.scss";
    button {
        cursor: pointer;
        border: 0;
        padding: 6px 4px;
        border-radius: 6px;
        color: white;
        font-weight: bold;
        box-shadow: 1px 2px 3px rgb(0,0,0,0.1);

    }
    .primary:hover {
        background-color: $primary-d;
    }
    .secondary:hover {
        background-color: $secondary-d;
    }
    .warning:hover {
        background-color: $warning-d;
    }
</style>