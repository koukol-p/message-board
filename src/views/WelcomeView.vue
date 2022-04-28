<template>
<div class="container">
    <SignupForm></SignupForm>
    <LoginForm />
</div>
</template>

<script>
import SignupForm from "@/components/SignupForm.vue"
import LoginForm from "@/components/LoginForm.vue"
export default {
    components: {SignupForm, LoginForm}
};
</script>

<style>
.container {
    display: flex;
    
    justify-content: center;
    padding-top: 40px;
    height: 100%;

}

</style>