const express = require("express");
const router = express.Router();
postController = require("../controllers/postControllers");

router.get/("/users", postControllers.getUsers);
router.post("/users/login", postControllers.login);
router.post("/users/register", postControllers.register);