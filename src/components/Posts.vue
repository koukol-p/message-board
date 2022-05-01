<template>
  <div class="posts">
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
  </div>
</template>

<script>
import Post from "./Post.vue";
export default { components: { Post } };
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";
.posts {
  background-color: $offwhite;
  border-width: 0 1px;
  border-color: $offwhite-d;
  border-style: solid;
  padding: 8px;

  margin: 0;
}
</style>
