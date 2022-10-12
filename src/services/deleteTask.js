const db = require("../configs/db/db");

const deleteTaskService = async (id) => {
  try {
    await db("tasks").where({ id }).del();

    return {
      success: true,
      info: `Task with id ${id} deleted succesfully`,
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      info: `There is the following error: ${error}`,
    };
  }
};

module.exports = deleteTaskService;
