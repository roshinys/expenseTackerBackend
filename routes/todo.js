const express = require("express");

const router = express.Router();

const todoController = require("../controllers/todo");

router.get("/get-todos", todoController.getTodos);
router.post("/add-todo", todoController.postTodo);
router.delete("/del-todo/:id", todoController.delTodo);
router.put("/update-todo/:id", todoController.updateTodo);

module.exports = router;
