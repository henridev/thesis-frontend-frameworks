<template>
  <div class="container">
    <signup v-if="!isLogin" @user="setUser" @switchLogin="setLogin"/>
    <login  v-if="isLogin" @user="setUser" @switchLogin="setLogin"/>
  </div>
</template>

<script type="text/javascript">
import signup from "../components/Signup.vue";
import login from "../components/Login.vue";
export default {
  name: "auhtorization",
  components: {
    signup,
    login
  },
  data() {
    return {
      isLogin: true
    };
  },
  methods: {
    setLogin(status) {
      this.isLogin = status;
    },
    setUser(user){
      this.$emit("user", user);
    }
  }
};
</script>
<style scoped>
.about {
  background-color: #54a041;
  padding: 20px;
  color: white;
  border-radius: 0.25rem;
}
.inner-about {
  width: 100%;
  max-width: 600pt;
  padding: 10pt;
}
.inner-about h1 {
  margin: 0;
  font-size: 35pt;
  margin-bottom: -10pt;
}
.inner-about p {
  margin: 0;
  margin-bottom: 8pt;
  font-size: 15pt;
}
</style>