const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");

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
  const { userId, state } = req.body;
  // Luetaan vanha data
  let currentData = [];
  try {
    currentData = JSON.parse(fs.readFileSync("data.json"));
  } catch (e) {
    console.log("Error reading data:", e);
  }
  // Lisätään uusi data
  oldData.push({ userId, state });
  // Kirjoitetaan uusi data ja käyttäjän ID
  fs.writeFileSync("data.json", JSON.stringify(currentData));
  res.sendStatus(200);
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
