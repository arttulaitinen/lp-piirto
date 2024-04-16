const express = require("express");
const Post = require("../models/Post");

exports.getUsers = async (req, res, next) => {
  try {
    const [users, _] = await Post.fetchAll();
    res.status(200).json({ users });
  } catch (error) {
    console.log(error);
    next(error);
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
    console.log(error);
    next(error);
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
    console.log(error);
    next(error);
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
    console.log(error);
    next(error);
  }
};
