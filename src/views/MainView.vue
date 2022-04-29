<template>
    <div>
        Main View
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore()
const router = useRouter()

//redirect to auth when not logged in
if (!store.state.auth.user) {
    router.push("/auth")
}
</script>

<style lang="scss" scoped>

</style>