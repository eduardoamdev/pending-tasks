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

app.post("/createTask", async (req, res) => {
  try {
    const dbResponse = await db("tasks").insert(req.body).returning("id");

    res.json({
      success: true,
      info: `Task created succesfully with the following id: ${dbResponse[0].id}`,
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
