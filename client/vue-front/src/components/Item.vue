<template>
  <li class="item">
    <div job="complete" id="0">
      <i
        v-if="todo.completed"
        v-on:click="handleStatusChange"
        class="fas fa-check-circle"
      ></i>
      <i
        v-if="!todo.completed"
        v-on:click="handleStatusChange"
        class="fas fa-circle"
      ></i>
    </div>
    <input v-if="isEdit" v-model="title" class="text" />
    <i
      v-if="isEdit"
      v-on:click="handleTitleChange"
      class="fas fa-spell-check"
    ></i>
    <i v-if="isEdit" v-on:click="isEdit = !isEdit" class="fas fa-ban"></i>
    <p v-if="!isEdit" class="text">{{ todo.title }}</p>
    <i
      v-if="!isEdit"
      v-on:click="isEdit = !isEdit"
      class="fas fa-edit"
      job="edit"
    ></i>
    <i class="far fa-trash-alt" v-on:click="handleDelete" job="delete"></i>
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
        this.isEdit = false;
        this.todo = res.todo;
      });
    },
    handleTitleChange: function() {
      api.update(this.todo._id, "", this.title).then(res => {
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
i {
  margin: 5px;
}

.item {
  /* width: 380px; */
  /* height: 45px; */
  /* min-height: 45px; */
  /* position: relative; */
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 2px;
  margin: 0 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.item i.co {
  /* position: absolute; */
  font-size: 25px;
  /* padding-left: 5px;
    left: 15px;
    top: 10px; */
}
.item i.co:hover {
  cursor: pointer;
}
.fa-check-circle {
  color: #6eb200;
}
.item p.text {
  /* position: absolute; */
  padding: 0;
  margin: 0;
  font-size: 15px;
  width: 100%;
  /* left: 50px; */
  text-align: left;
  /* top: 5px; */
  background-color: #fff;
  margin-left: 10px;
}

.item input.text {
  /* position: absolute; */
  padding: 0;
  margin: 0;
  font-size: 15px;
  width: 100%;
  /* left: 50px; */
  text-align: left;
  border: none;
  background-color: #fff;
  margin-left: 10px;
}

.lineThrough {
  text-decoration: line-through;
  color: #ccc;
}
.item i.de {
  /* position: absolute; */
  font-size: 25px;
  /* right: 15px;
    top: 10px; */
}
.item i.de:hover {
  color: #af0000;
  cursor: pointer;
}
</style>
