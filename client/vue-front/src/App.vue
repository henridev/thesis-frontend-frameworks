<template>
  <div class="container">
    <top></top>
    <div class="content">
      <ul id="list">
        <item v-for="todo in todos" :key="todo._id" :todo="todo" @delete="onDelete"/>
      </ul>
    </div>
    <add @created="onCreate"></add>
  </div>
</template>

<script>
import item from "./components/Item";
import top from "./components/Top.vue";
import add from "./components/Add.vue";
import api from "./api";
export default {
  name: "App",
  components: {
    item,
    top,
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

.container {
  padding: 10px;
  width: 380px;
  margin: 0 auto;
}

.content {
  width: 380px;
  height: 350px;
  max-height: 350px;
  background-color: #fff;
  overflow: auto;
}
.content::-webkit-scrollbar {
  display: none;
}
.content ul {
  padding: 0;
  margin: 0;
}
</style>
