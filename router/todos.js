const router = require("express").Router();
const { getAllTodos, deleteTodo, updateTodo, getOneTodo, createTodo } = require("../controllers/todos");


router.route("/").get(getAllTodos).post(createTodo)

router.route("/:id")
.get(getOneTodo)
.patch(updateTodo)
.delete(deleteTodo)

module.exports = router;