const taskService = require("../services/task");

const taskController = async (req, res) => {
  const taskResponse = await taskService(req.params.id);

  res.render("task", { taskResponse });
};

module.exports = taskController;
