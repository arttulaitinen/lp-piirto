const express = require("express");
const router = express.Router();
postController = require("../controllers/postControllers");

router.post("/api/login", postControllers.login);
