const db = require("../configs/db/db");

const updateTaskService = async (id, info) => {
  try {
    await db("tasks").where({ id }).update(info);

    return {
      success: true,
      info: `Task with id ${id} has been updated succesfully`,
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      info: `There is the following error: ${error}`,
    };
  }
};

module.exports = updateTaskService;
