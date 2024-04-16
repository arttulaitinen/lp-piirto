require("dotenv").config();

const express = require("express");
const path = require("path");
const fs = require("fs");
const Post = require("./models/Post.js");

const cors = require("cors");
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Uudelleenohjaus
app.use("/api", require("./routes/postRoutes"));
app.use("/users", require("./routes/userRoutes"));

// Server start
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
