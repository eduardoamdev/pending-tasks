const db = require("../configs/db/db");

const createTaskService = async (info) => {
  try {
    const dbResponse = await db("tasks").insert(info).returning("id");

    return {
      success: true,
      info: `New task created succesfully with the following id: ${dbResponse[0].id}`,
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      info: `There is the following error: ${error}`,
    };
  }
};

module.exports = createTaskService;
