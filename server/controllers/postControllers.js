const posts = require("../models/Post");
import writeData from "../utils/jsonUtils";

exports.getUsers = async (req, res, next) => {
  try {
    const [users, _] = await Post.fetchAll();
    res.status(200).json({
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
exports.getUser = async (req, res, next) => {
  try {
    const user = await Post.fetchUser(req.params.id);
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
exports.updateUser = async (req, res, next) => {
  try {
    const user = await Post.putUser(req.params.id, req.body);
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
exports.deleteUser = async (req, res, next) => {
  try {
    await Post.deleteUser(req.params.id);
    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
