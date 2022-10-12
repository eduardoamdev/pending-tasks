const tasksService = require("../services/tasks");

const tasksController = async (req, res) => {
  const tasksResponse = await tasksService();

  res.json(tasksResponse);
};

module.exports = tasksController;
