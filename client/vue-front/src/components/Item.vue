<template>
  <li class="list-group-item">
    <div>
      <i v-if="todo.completed" v-on:click="handleStatusChange" class="fas fa-check-circle"></i>
      <i v-if="!todo.completed" v-on:click="handleStatusChange" class="fas fa-circle"></i>
    </div>
    <input v-if="isEdit" v-model="title" class="todo-text" :placeholder="todo.title" />
    <span v-if="!isEdit" class="todo-text">{{ todo.title }}</span>
    <span class="button-group">
      <i v-if="isEdit" v-on:click="handleTitleChange" class="fas fa-spell-check"></i>
      <i v-if="isEdit" v-on:click="isEdit = !isEdit" class="fas fa-ban"></i>
      <i v-if="!isEdit" v-on:click="isEdit = !isEdit" class="fas fa-edit" ></i>
      <i class="far fa-trash-alt" v-on:click="handleDelete"></i>
    </span>
  </li>
</template>

<script type="text/javascript">
import api from "../api";

export default {
  name: "item",
  data() {
    return {
      title: "",
      isEdit: false
    };
  },
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleStatusChange: function() {
      api.update(this.todo._id, !this.todo.completed, "").then(res => {
        console.log(res);
        this.isEdit = false;
        this.todo = res.todo;
      });
    },
    handleTitleChange: function() {
      api.update(this.todo._id, "", this.title).then(res => {
        console.log(res);
        this.isEdit = false;
        this.todo = res.todo;
      });
    },
    handleDelete() {
      api.delete(this.todo._id).then(res => {
        console.log(res);
        this.$emit("delete", this.todo._id);
      });
    }
  }
};
</script>
<style>
.list-group-item {
  border-top-width: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.edit-section {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin: 0 10px;
}

.todo-text {
  flex-grow: 1;
  margin: 5px 10px;
}

.list-group-item i {
  margin: 3px;
}
.fa-trash-alt,
.fa-circle {
  color: rgba(228, 39, 39, 0.87);
}
.fa-check-circle {
  color: green;
}
</style>
