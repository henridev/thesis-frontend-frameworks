<template>
  <div>
    <navigation v-bind:user="user" @logout="logout"></navigation>
    <router-view @user="setUser"></router-view>
  </div>
</template>

<script>
import navigation from "./components/Navigation.vue";
export default {
  name: "App",
  components: {
    navigation
  },
  methods: {
    setUser(user) {
      this.user = user;
    },
    logout() {
      this.user = null;
      this.$router.push("/");
    }
  },
  data() {
    return { user: null };
  }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.1);
  font-family: "Titillium Web", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
