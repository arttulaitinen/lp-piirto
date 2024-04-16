const express = require("express");
const router = express.Router();
userControllers = require("../controllers/userControllers");

router.route("/login").post(userControllers.loginUser);
router.route("/add").post(userControllers.addUser);
router.route("/save").post(userControllers.saveUser);

module.exports = router;
