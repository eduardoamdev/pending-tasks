const express = require("express");
const router = require("./routes/tasks");
const db = require("./configs/db/db");

const app = express();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/tasks", router);

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
