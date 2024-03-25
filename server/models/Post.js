const db = require("../config/db");

const connection = db.connection({
  host: "host",
  user: "user",
  password: "password",
  database: "database",
});
