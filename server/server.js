require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
const Post = require("./models/Post.js");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Luetaan kaikki käyttäjät tietokannasta => users[]
let users = [];
Post.fetchAll()
  .then(([rows, fields]) => {
    users = rows;
    console.log("Users fetched successfully");
  })
  .catch((err) => console.log(err));

// Middleware
app.use(bodyParser.json());
app.use("/api", require("./routes/postRoutes"));
app.use(cors());

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

// Käyttäjän lisäys endpoint
app.post("/users/add", (req, res) => {
  const { username, password } = req.body;
  const userId = users.length + 1;
  const user = { userId, username, password };
  users.push(user);
  Post.saveUser(user)
    .then(() => {
      console.log("User added successfully");
      res.json({ success: true, message: "User added successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.json({ success: false, message: "Error adding user" });
    });
});

// Login endpoint
app.post("/users/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    try {
      // Datan lukeminen ja käyttäjän tilan palauttaminen
      const data = JSON.parse(fs.readFileSync("data.json"));
      const userState = data.find((d) => d.userId === user.userId);
      res.json({
        success: true,
        message: "Login successful",
        userState,
        user: user.userId,
      });
    } catch (e) {
      res.status(500).json({ success: false, message: "Error reading data" });
    }
  } else {
    res.json({ success: false, message: "Invalid credentials" });
  }
});

// Server start
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
