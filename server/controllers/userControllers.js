const express = require("express");
const fs = require("fs");
const Post = require("../models/Post");

let users;

exports.loginUser = async (req, res, next) => {
  users = Post.fetchAll()
    .then((users) => {
      console.log(users);
      const { username, password } = req.body;
      const user = users.find(
        (u) => u.username === username && u.password === password
      );
      console.log(user);
      try {
        // Datan lukeminen toistaiseksi
        const data = JSON.parse(fs.readFileSync("data.json"));
        const userState = data.find((d) => d.userId === user.userId);
        res.json({
          success: true,
          message: "Login successful",
          userState,
          user: user.userId,
        });
        console.log("Login successful");
      } catch (e) {
        console.error("Error:", e);
        res.json({
          success: true,
          message: "Login successful",
          userState: null,
          user: user.userId,
        });
        console.log("Login successful, no data found");
      }
    })
    .catch((error) => {
      console.error("Error fetching users:", error);
    });
};
exports.addUser = async (req, res, next) => {
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
};
exports.saveUser = async (req, res, next) => {
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
};
