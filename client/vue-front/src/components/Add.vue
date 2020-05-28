<template>
  <li class="list-group-item">
    <div class="input-group input-group-sm mb-3">
      <div class="input-group-prepend">
        <input
          type="text"
          id="input"
          v-model="title"
          placeholder="Add todo"
          class="form-control"
          aria-describedby="inputGroup-sizing-sm"
        />
        <span class="input-group-text" id="inputGroup-sizing-sm">
          <i class="fa fa-plus-circle" v-on:click="handleCreation"></i>
        </span>
      </div>
    </div>
  </li>
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
</style>

