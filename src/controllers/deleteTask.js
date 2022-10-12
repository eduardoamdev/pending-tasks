const deleteTaskService = require("../services/deleteTask");

const deleteTaskController = async (req, res) => {
  const deleteTaskResponse = await deleteTaskService(req.params.id);

  res.json(deleteTaskResponse);
};

module.exports = deleteTaskController;
