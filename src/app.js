const express = require("express");

const homeRouter = require("./routes/home");
const tasksRouter = require("./routes/tasks");

const app = express();

const port = 3000;

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", homeRouter);
app.use("/tasks", tasksRouter);

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
