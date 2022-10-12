const knex = require("knex");
const knextfile = require("./knexfile");

const db = knex(knextfile.development);

module.exports = db;
