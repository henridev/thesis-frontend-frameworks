const express = require("express");
const router = express.Router();
const todos = require("../data/todos");

router.get("/all", async (req, res, next) => {
  try {
    const _todos = await todos.getAll();
    res.json({ todos: _todos });
  } catch (error) {
    console.log("error", error);
  }
});

router.post("/", async (req, res, next) => {
  const title = req.body.title;
  try {
    const _todo = await todos.createOne(title);
    res.json({ todo: _todo });
  } catch (error) {
    console.log("error", error);
  }
});

router.get("/:id", async (req, res, next) => {
  const _id = req.params.id;
  try {
    const _todo = await todos.getOne(_id);
    res.json({ todo: _todo });
  } catch (error) {
    console.log("error", error);
  }
});

router.put("/:id", async (req, res, next) => {
  const _id = req.params.id;
  const title = req.body.title;
  const status = req.body.status;
  try {
    const _todo = await todos.updateOne(_id, title, status);
    res.json({ todo: _todo });
  } catch (error) {
    console.log("error", error);
  }
});

router.delete("/:id", async (req, res, next) => {
  const _id = req.params.id;
  try {
    const _todo = await todos.deleteOne(_id);
    res.json({ todo: _todo });
  } catch (error) {
    console.log("error", error);
  }
});

module.exports = router;
