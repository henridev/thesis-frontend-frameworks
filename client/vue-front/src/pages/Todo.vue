<template>
  <div class="card">
    <div class="card-header background-image"></div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item active">Hello {{name}} these are your todos for today</li>
        <span class="todo-items">
          <item v-for="todo in todos" :key="todo._id" :todo="todo" @delete="onDelete" />
        </span>
        <add @created="onCreate"></add>
      </ul>
    </div>
  </div>
</template>

<script>
import item from "../components/Item.vue";
import add from "../components/Add.vue";
import api from "../api";
export default {
  name: "stranger",
  components: {
    item,
    add
  },
  methods: {
    onDelete(id) {
      this.todos = this.todos.filter(todo => todo._id !== id);
    },
    onCreate(todo) {
      console.log(todo, "cre");
      this.todos.push(todo);
    }
  },
  data() {
    return {
      todos: []
    };
  },
  created() {
    api
      .getAll()
      .then(res => {
        console.log(res);
        this.todos = res.todos;
      })
      .catch(err => console.log("err", err));
  }
};
</script>

<style>
.card {
  width: 30rem;
}

.background-image {
  height: 200px;
  background-image: url("https://mdbootstrap.com/img/Photos/Horizontal/Nature/full%20page/img(20).jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
.todo-items {
  max-height: 30vh;
  overflow-y: scroll;
  min-height: 30vh;
}

li.list-group-item.active {
  background-color: #54a041;
  border-color: #54a041;
}
</style>
