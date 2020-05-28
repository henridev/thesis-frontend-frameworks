<template>
  <form class="form-signin">
    <h1 class="h3 mb-3 font-weight-normal marge">Hello welcome to sign up</h1>
    <input name="name" type="text" v-model="name" class="form-control marge" placeholder="name" />
    <input
      name="email"
      type="email"
      v-model="email"
      class="form-control marge"
      placeholder="Email address"
    />
    <input
      name="password"
      type="password"
      v-model="password"
      class="form-control marge"
      placeholder="Password"
    />
    <button class="btn btn-lg btn-success btn-block marge" v-on:click="signup" type="submit">Sign up</button>
    <span class="text-primary marge" v-on:click="switchLogin">I already have an account</span>
  </form>
</template>

<script type="text/javascript">
import api from "../authorization";
export default {
  name: "signup",
  data() {
    return {
      name: "",
      email: "",
      password: ""
    };
  },
  methods: {
    switchLogin() {
      this.$emit("switchLogin", true);
    },
    signup(event) {
      event.preventDefault();
      api
        .signup(this.name, this.email, this.password)
        .then(user => {
          // this.$emit("user", user);
          console.log(user);

          this.$router.replace({ name: "todos" });
        })
        .catch(err => console.log("err", err));
    }
  }
};
</script>
<style>
.header {
  width: 380px;
  height: 200px;
  background-image: url("https://mdbootstrap.com/img/Photos/Horizontal/Nature/full%20page/img(20).jpg");
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 15px 15px 0 0;
  position: relative;
}
.clear {
  width: 30px;
  height: 30px;
  position: absolute;
  right: 20px;
  top: 20px;
}
.clear i {
  font-size: 30px;
  color: #fff;
}
.clear i:hover {
  cursor: pointer;
  text-shadow: 1px 3px 5px #000;
  transform: rotate(45deg);
}
.marge {
  margin: 5px;
}
</style>
