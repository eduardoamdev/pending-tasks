const createTaskService = require("../services/createTask");

const createTaskController = async (req, res) => {
  const createTaskResponse = await createTaskService(req.body);

  res.json(createTaskResponse);
};

module.exports = createTaskController;
