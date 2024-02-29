const db = require("../config/db");

// Huom. korjaa tietokannalla
const connection = db.connection({
  host: "host",
  user: "user",
  password: "password",
  database: "database",
});
