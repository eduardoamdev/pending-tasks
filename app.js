const express = require("express");
const db = require("./db/db");

const app = express();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/getTasks", async (req, res) => {
  try {
    const dbResponse = await db("tasks").select("id", "title", "content");

    res.json({ success: true, info: dbResponse });
  } catch (error) {
    console.log(error);

    res.json({
      success: false,
      info: `There is the following error: ${error}`,
    });
  }
});

app.get("/getTask/:id", async (req, res) => {
  try {
    const dbResponse = await db("tasks")
      .select("id", "title", "content")
      .where({ id: req.params.id });

    res.json({ success: true, info: dbResponse });
  } catch (error) {
    console.log(error);

    res.json({
      success: false,
      info: `There is the following error: ${error}`,
    });
  }
});

app.post("/createTask", async (req, res) => {
  try {
    const dbResponse = await db("tasks").insert(req.body).returning("id");

    res.json({
      success: true,
      info: `New task created succesfully with the following id: ${dbResponse[0].id}`,
    });
  } catch (error) {
    console.log(error);

    res.json({
      success: false,
      info: `There is the following error: ${error}`,
    });
  }
});

app.put("/updateTask/:id", async (req, res) => {
  try {
    await db("tasks").where({ id: req.params.id }).update(req.body);

    res.json({
      success: true,
      info: `Task with id ${req.params.id} has been updated succesfully`,
    });
  } catch (error) {
    console.log(error);

    res.json({
      success: false,
      info: `There is the following error: ${error}`,
    });
  }
});

app.delete("/deleteTask/:id", async (req, res) => {
  try {
    await db("tasks").where({ id: req.params.id }).del();

    res.json({
      success: true,
      info: `Task with id ${req.params.id} deleted succesfully`,
    });
  } catch (error) {
    console.log(error);

    res.json({
      success: false,
      info: `There is the following error: ${error}`,
    });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
