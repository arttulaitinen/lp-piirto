const posts = require("../models/Post");

exports.users = async (req, res) => {
  const users = await posts.users();
  res.json(users);
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await posts.login(username, password);
  if (user) {
    res.json({ success: true, message: "Login successful" });
  } else {
    res.json({ success: false, message: "Invalid credentials" });
  }
};

exports.register = async (req, res) => {
  const { username, password } = req.body;
  const user = await posts.register(username, password);
  if (user) {
    res.json({ success: true, message: "Registration successful" });
  } else {
    res.json({ success: false, message: "Registration failed" });
  }
};

