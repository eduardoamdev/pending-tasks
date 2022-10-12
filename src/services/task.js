const db = require("../configs/db/db");

const taskService = async (id) => {
  try {
    const dbResponse = await db("tasks")
      .select("id", "title", "content")
      .where({ id });

    return { success: true, info: dbResponse };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      info: `There is the following error: ${error}`,
    };
  }
};

module.exports = taskService;
