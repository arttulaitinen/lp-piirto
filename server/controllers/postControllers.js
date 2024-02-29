const posts = require("../models/Post");

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await posts.login(username, password);
  if (user) {
    res.json({ success: true, message: "Login successful" });
  } else {
    res.json({ success: false, message: "Invalid credentials" });
  }
};
