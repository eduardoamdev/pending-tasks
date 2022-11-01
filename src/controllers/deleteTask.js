const deleteTaskService = require("../services/deleteTask");
const taskService = require("../services/task");

const deleteConfirmationController = async (req, res) => {
  const response = await taskService(req.params.id);

  res.render("delete", { response });
};

const deleteTaskController = async (req, res) => {
  await deleteTaskService(req.params.id);

  res.redirect("/tasks");
};

module.exports = { deleteTaskController, deleteConfirmationController };
