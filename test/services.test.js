const knexMock = require("mock-knex");
const db = require("../src/configs/db/db");
const tasksService = require("../src/services/tasks");
const taskService = require("../src/services/task");
const createTaskService = require("../src/services/createTask");
const updateTaskService = require("../src/services/updateTask");
const deleteTaskService = require("../src/services/deleteTask");

knexMock.mock(db);

const dbData = [
  {
    id: 0,
    title: "Test",
    content: "Test content changed",
  },
  {
    id: 1,
    title: "Test 1",
    content: "This is a test",
  },
  {
    id: 2,
    title: "Test 2",
    content: "Another test",
  },
];

describe("Services tests", () => {
  beforeEach(() => {
    tracker = knexMock.getTracker();
    tracker.install();
    knexMock.mock(db.connection);
  });

  afterEach(() => {
    tracker.uninstall();
    knexMock.unmock(db.connection);
  });

  test("Tasks is expecting to return 3 tasks", async () => {
    tracker.on("query", (query) => {
      query.response(dbData);
    });

    const result = await tasksService();

    expect(result.success).toBe(true);

    expect(result.info.length).toBe(3);
  });

  test("Task is expecting to return the 0 id task", async () => {
    tracker.on("query", (query) => {
      query.response(dbData[0]);
    });

    const result = await taskService(0);

    expect(result.success).toBe(true);

    expect(result.info).toEqual({
      id: 0,
      title: "Test",
      content: "Test content changed",
    });
  });

  test("Create task is expecting to return a created task id", async () => {
    tracker.on("query", (query) => {
      query.response([
        {
          id: 4,
          title: "Test",
          content: "Test content changed",
        },
      ]);
    });

    const result = await createTaskService({
      id: 4,
      title: "Test",
      content: "Test content changed",
    });

    expect(result.success).toBe(true);

    expect(result.info).toEqual(
      "New task created succesfully with the following id: 4"
    );
  });

  test("Update task is expecting to return the updated task info", async () => {
    tracker.on("query", (query) => {
      query.response();
    });

    const result = await updateTaskService("4", {
      id: 4,
      title: "Test",
      content: "Test content changed",
    });

    expect(result.success).toBe(true);

    expect(result.info).toEqual(`Task with id 4 has been updated succesfully`);
  });

  test("Delete task is expecting to return the updated task info", async () => {
    tracker.on("query", (query) => {
      query.response();
    });

    const result = await deleteTaskService("4");

    expect(result.success).toBe(true);

    expect(result.info).toEqual(`Task with id 4 deleted succesfully`);
  });
});
