const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "test",
  host: "localhost",
  port: 5433,
  database: "hr_app_db",
});

module.exports = pool;