const express = require("express");

const tasksController = require("../controllers/tasks");
const taskController = require("../controllers/task");
const createTaskController = require("../controllers/createTask");
const updateTaskController = require("../controllers/updateTask");
const deleteTaskController = require("../controllers/deleteTask");

const router = express.Router();

router.get("/", tasksController);

router.get("/:id", taskController);

router.post("/create", createTaskController);

router.put("/update/:id", updateTaskController);

router.delete("/delete/:id", deleteTaskController);

module.exports = router;
