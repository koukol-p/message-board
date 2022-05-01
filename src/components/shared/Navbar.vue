<template>
  <nav v-if="store.state.auth.user">
    <span>brand</span>
    <div class="nav-links">
      <ul>
        <li :class="{ active: router.currentRoute.value.path === '/' }">
          <router-link to="/">Home</router-link>
        </li>
        <li>profile</li>
        <li @click="handleLogout">Log Out</li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();

const handleLogout = () => {
  try {
    store.dispatch("logout");
  } catch (err) {
    console.log(err);
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";
a {
  text-decoration: none;
  color: $offwhite;
}
nav {
  display: flex;
  justify-content: space-between;
  background-color: $primary;
  color: $offwhite;
  align-items: center;
  padding: 0 12px;
  .nav-links ul {
    display: flex;
    list-style: none;
    align-items: center;
    margin: 0;
    li {
      padding: 16px 12px;
      cursor: pointer;

      &:hover {
        background-color: $primary-d;
      }
    }
  }
}
.active {
  background-color: $primary-d;
}
</style>
