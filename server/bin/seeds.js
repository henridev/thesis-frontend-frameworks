const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const { users, todos } = require("./data");
const mongoose = require("mongoose");
const User = require("../models/User");
const Todo = require("../models/Todo");
// const FriendRequest = require('../models/FriendRequest')
// const friends_CRUD = require('../CRUD/CRUD_friends')
// const chat_CRUD = require('../CRUD/CRUD_chat')

require("../configs/database");

async function createUsers(params) {
  await User.deleteMany();
  const usersCreated = await User.insertMany(users);
  const userIDS = usersCreated.map((u) => u._id);
  await addContacts(userIDS);
  await createTodos(userIDS);
}

async function addContacts(userIDS) {
  for (const id of userIDS) {
    try {
      const res = await User.findByIdAndUpdate(id, {
        $addToSet: {
          _contacts: { $each: userIDS.filter((_id) => _id !== id) },
        },
      });
      console.log("contacts added ", res);
    } catch (err) {
      console.error("error adding contacts", err);
    }
  }
  return true;
}

async function createTodos(userIDS) {
  try {
    await Todo.deleteMany();
    const TodosCreated = await Todo.insertMany(todos);
    const TodoIDS = TodosCreated.map((u) => u._id);
    userIDS.forEach((id) => {
      // Shuffle array
      const shuffled = TodoIDS.sort(() => 0.5 - Math.random());
      // Get sub-array of first n elements after shuffled
      let selectedtodos = shuffled.slice(0, 10);
      User.findByIdAndUpdate(id, {
        $addToSet: { _todos: { $each: selectedtodos } },
      })
        .then((res) => console.log("res", res))
        .catch((err) => console.log("err", err));
    });
  } catch (error) {
    console.log(error);
  }
}

async function createTodos(userIDS) {
  try {
    await Todo.deleteMany();
    const TodosCreated = await Todo.insertMany(todos);
    const TodoIDS = TodosCreated.map((u) => u._id);
    userIDS.forEach((id) => {
      // Shuffle array
      const shuffled = TodoIDS.sort(() => 0.5 - Math.random());
      // Get sub-array of first n elements after shuffled
      let selectedtodos = shuffled.slice(0, 10);
      User.findByIdAndUpdate(id, {
        $addToSet: { _todos: { $each: selectedtodos } },
      })
        .then((res) => console.log("res", res))
        .catch((err) => console.log("err", err));
    });
  } catch (error) {
    console.log(error);
  }
}

// createUsers();
