const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

/* Kirjautumisen muuttujat
  Tässä esimerkissä käyttäjät ovat kovakoodattu
  Tietokannasta tuotaisiin käyttäjät ja salasanat
  Katso Post.js ja .env
*/
const users = [
  { username: "admin", password: "admin" },
  { username: "user", password: "user" },
];

// Middleware
app.use(bodyParser.json());

// Save endpoint
app.post("/users/save", (req, res) => {
  console.log(req.body);
  res.json({ success: true, message: "Data saved" });
});

// Login endpoint
app.post("/users/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    res.json({ success: true, message: "Login successful" });
  } else {
    res.json({ success: false, message: "Invalid credentials" });
  }
});

// Server start
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
