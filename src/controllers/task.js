const taskService = require("../services/task");

const taskController = async (req, res) => {
  const taskResponse = await taskService(req.params.id);

  res.json(taskResponse);
};

module.exports = taskController;
