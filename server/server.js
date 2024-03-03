const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

/* Kirjautumisen muuttujat
  Tässä esimerkissä käyttäjät ovat kovakoodattu
  Tietokannasta tuotaisiin käyttäjät ja salasanat
  Katso Post.js, postRoutes.js ja .env
*/
const users = [
  { username: "admin", password: "admin" },
  { username: "user", password: "user" },
];

// Middleware
app.use(bodyParser.json());

// Login endpoint
app.post("/api/login", (req, res) => {
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
