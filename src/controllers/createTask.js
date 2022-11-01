const createTaskService = require("../services/createTask");

const creationFormController = async (req, res) => {
  res.render("create");
};

const createTaskController = async (req, res) => {
  await createTaskService(req.body);

  res.redirect("/tasks");
};

module.exports = { createTaskController, creationFormController };
