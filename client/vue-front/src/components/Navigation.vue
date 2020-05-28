<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <a class="navbar-brand" href="#">
      <i class="fas fa-clipboard-list"></i>
    </a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <router-link class="link" to="/">home</router-link>
        </li>
        <li v-if="user" class="nav-item">
          <router-link class="link" to="/todos">todos</router-link>
        </li>
      </ul>
      <button class="btn btn-success my-2 my-sm-0" type="submit">
        <router-link v-if="!user" class="nav-link button" to="/authorization">sign in / log in</router-link>
        <span v-if="user" class="nav-link button" v-on:click="logout">Logout</span>
      </button>
    </div>
  </nav>
</template>

<script type="text/javascript">
export default {
  name: "navigation",
  props: ["user"],
  methods: {
    logout() {
      this.$emit("logout", true);
    }
  }
};
</script>
<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #54a041;
}
.button {
  color: white !important;
}
.link {
  color: black !important;
}
.nav-item {
  margin-left: 5px;
}
</style>
