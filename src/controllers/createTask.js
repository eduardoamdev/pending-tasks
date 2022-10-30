const createTaskService = require("../services/createTask");

const creationFormController = async (req, res) => {
  res.render("create");
};

const createTaskController = async (req, res) => {
  const createTaskResponse = await createTaskService(req.body);

  res.json(createTaskResponse);
};

module.exports = { createTaskController, creationFormController };
