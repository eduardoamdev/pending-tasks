const db = require("../configs/db/db");

const tasksService = async () => {
  try {
    const dbResponse = await db("tasks").select("id", "title");

    return { success: true, info: dbResponse };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      info: `There is the following error: ${error}`,
    };
  }
};

module.exports = tasksService;
