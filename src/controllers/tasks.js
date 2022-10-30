const tasksService = require("../services/tasks");

const tasksController = async (req, res) => {
  const tasksResponse = await tasksService();

  res.render("tasks", { tasksResponse });
};

module.exports = tasksController;
