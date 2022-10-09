const Todo = require("../model/todo");

exports.getTodos = async (req, res) => {
  const expenses = await Todo.findAll();
  res.json(expenses);
};

exports.postTodo = async (req, res) => {
  const expense = req.body.expense;
  const description = req.body.description;
  const category = req.body.category;
  try {
    if (!expense && !description && !category) {
      throw new Error("every field is required");
    }
    const todo = await Todo.create({
      expense: expense,
      category: category,
      description: description,
    });
    res.json(todo);
  } catch (err) {
    console.log(err);
  }
};

exports.delTodo = async (req, res) => {
  const delId = req.params.id;
  try {
    const delTodo = await Todo.destroy({
      where: {
        id: delId,
      },
    });
    res.json(delTodo);
  } catch (err) {
    console.log(err);
  }
};

exports.updateTodo = async (req, res) => {
  const editId = req.params.id;
  const expense = req.body.expense;
  const description = req.body.description;
  const category = req.body.category;
  try {
    const updatedTodo = await Todo.update(
      {
        expense: expense,
        category: category,
        description: description,
      },
      {
        where: {
          id: editId,
        },
      }
    );
    res.json(updatedTodo);
  } catch (err) {
    console.log(err);
  }
};
