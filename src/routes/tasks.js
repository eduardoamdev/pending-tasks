const express = require("express");

const tasksController = require("../controllers/tasks");
const taskController = require("../controllers/task");
const {
  createTaskController,
  creationFormController,
} = require("../controllers/createTask");
const {
  updateTaskController,
  updatingFormController,
} = require("../controllers/updateTask");
const {
  deleteTaskController,
  deleteConfirmationController,
} = require("../controllers/deleteTask");

const router = express.Router();

router.get("/", tasksController);

router.get("/task/:id", taskController);

router.get("/creationForm", creationFormController);

router.post("/create", createTaskController);

router.get("/updatingForm/:id/:title/:content", updatingFormController);

router.post("/update/:id", updateTaskController);

router.get("/deleteConfirmation/:id", deleteConfirmationController);

router.get("/delete/:id", deleteTaskController);

module.exports = router;
