const mysql = require("mysql2");

// Katso .env
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

let sql = "SELECT * FROM tiedot";

//pool.execute(sql, function (err, result) {
//  if (err) throw err;
//  console.log(result);
//});

module.exports = pool.promise();
