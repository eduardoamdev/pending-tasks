const getString = require("../src/services/getString");
const knexMock = require("mock-knex");

describe("Test general", () => {
  test('getString devuelve la cadena de caracteres "test service"', () => {
    expect(getString()).toBe("test service");
  });
});
