const updateTaskService = require("../services/updateTask");

const updateTaskController = async (req, res) => {
  const updateTaskResponse = await updateTaskService(req.params.id, req.body);

  res.json(updateTaskResponse);
};

module.exports = updateTaskController;
