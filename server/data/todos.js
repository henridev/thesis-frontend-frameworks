const Todo = require("../models/Todo");

async function getAll(params) {
  try {
    const res = await Todo.find({});
    return res;
  } catch (error) {
    console.log("error", error);
  }
}

async function getOne(id) {
  try {
    const res = await Todo.findById({ _id: id });
    return res;
  } catch (error) {
    console.log("error", error);
  }
}

async function deleteOne(id) {
  try {
    const res = await Todo.findByIdAndDelete({ _id: id });
    return res;
  } catch (error) {
    console.log("error", error);
  }
}

async function createOne(title) {
  try {
    const res = await Todo.create({ title: title, completed: false });
    return res;
  } catch (error) {
    console.log("error", error);
  }
}

async function updateOne(id, title, status) {
  let newInfo = {};
  if (title !== "") {
    newInfo = { ...newInfo, title };
  }
  if (status !== "") {
    newInfo = { ...newInfo, completed: status };
  }
  try {
    const res = await Todo.findByIdAndUpdate(id, newInfo, { new: true });
    return res;
  } catch (error) {
    console.log("error", error);
  }
}

module.exports = {
  getAll,
  getOne,
  deleteOne,
  createOne,
  updateOne,
};
