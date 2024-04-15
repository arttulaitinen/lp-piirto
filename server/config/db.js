const mysql = require("mysql");
const { promisify } = require("util");

// Katso .env
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

const query = promisify(pool.query).bind(pool);

let sql = "SELECT * FROM tiedot";

query(sql)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = pool;
