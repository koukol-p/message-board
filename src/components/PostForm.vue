<template>
  <form class="form-container">
    <div class="input-group">
      <label for="title">Title:</label>
      <input id="title" type="text" required v-model="title" />
    </div>

    <div class="input-group">
      <textarea id="body" required v-model="body" />
    </div>
    <Button theme="primary" type="submit">Post</Button>
  </form>
</template>

<script>
import { ref } from "vue";

const title = ref("");
const body = ref("");
</script>

<style lang="scss" scoped>
.form-container {
  width: 600px;
  margin: 0 auto;
}
textarea {
  resize: none;
  width: 100%;
  min-height: 120px;
}
#title {
  flex: 1;
  margin-left: 16px;
}
</style>
