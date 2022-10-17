const knexMock = require("mock-knex");
const db = require("../src/configs/db/db");
const tasksService = require("../src/services/tasks");

knexMock.mock(db);

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
      query.response({
        success: true,
        info: [
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
        ],
      });
    });

    const result = await tasksService();

    expect(result.info.success).toBe(true);
    expect(result.info.info.length).toBe(3);
  });
});
