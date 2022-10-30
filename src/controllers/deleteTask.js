const deleteTaskService = require("../services/deleteTask");

const deleteTaskController = async (req, res) => {
  await deleteTaskService(req.params.id);

  res.redirect("/tasks");
};

module.exports = deleteTaskController;
