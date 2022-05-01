<template>
  <div class="post">
    <div class="header">
      <h3>Title</h3>
      <span class="author">@Author</span>
    </div>
    <div class="body">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit
      quaerat eum tenetur! Perferendis consequatur eaque sed inventore illo
      reiciendis illum temporibus nemo laboriosam ducimus voluptatibus delectus,
      iure quae qui dolor!
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";
h3,
span {
  margin: 0;
  padding: 0;
}
.post {
  min-height: 120px;
  margin: 12px 0;
  background-color: $offwhite;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgb(0, 0, 0, 0.3);
  cursor: pointer;
  overflow: hidden;

  &:hover {
    background-color: $offwhite-d;
  }

  .header {
    background-color: $offwhite-dd;
    padding: 4px 12px;

    display: flex;
    align-items: center;
    h3 {
      font-weight: 500;
      font-size: 1.5rem;
      margin-right: 12px;
    }
    .author {
      font-size: 0.8rem;
    }
  }
  .body {
    padding: 12px;
  }
}
</style>
