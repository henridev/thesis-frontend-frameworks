<template>
  <div class="add-to-do">
    <i class="fa fa-plus-circle" v-on:click="handleCreation"></i>
    <input type="text" id="input" v-model="title" placeholder="Add todo">
  </div>
</template>

<script type="text/javascript">
import api from "../api";
export default {
  name: "add",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    handleCreation: function() {
      api.create(this.title).then(todo => {
        this.title = "";
        this.$emit("created", todo);
      });
    }
  }
};
</script>
<style>
.add-to-do {
  justify-content: space-between;
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.add-to-do i {
  /* position: absolute; */
  font-size: 40px;
  color: #4162f6;
}

.add-to-do input {
  background-color: transparent;
  border: none;
  font-size: 20px;
  padding-left: 10px;
}
.add-to-do input::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: #4162f6;
  font-family: "Titillium Web", sans-serif;
  font-size: 20px;
}
.add-to-do input::-moz-placeholder {
  /* Firefox 19+ */
  color: #4162f6;
  font-family: "Titillium Web", sans-serif;
  font-size: 20px;
}
.add-to-do input:-ms-input-placeholder {
  /* IE 10+ */
  color: #4162f6;
  font-family: "Titillium Web", sans-serif;
  font-size: 20px;
}
.add-to-do input:-moz-placeholder {
  /* Firefox 18- */
  color: #4162f6;
  font-family: "Titillium Web", sans-serif;
  font-size: 20px;
}
</style>

