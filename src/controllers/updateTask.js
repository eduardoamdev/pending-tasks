const updateTaskService = require("../services/updateTask");

const updatingFormController = async (req, res) => {
  res.render("update", { task: req.params });
};

const updateTaskController = async (req, res) => {
  const updateTaskResponse = await updateTaskService(req.params.id, req.body);

  res.redirect(`/tasks/task/${updateTaskResponse.info}`);
};

module.exports = { updateTaskController, updatingFormController };
