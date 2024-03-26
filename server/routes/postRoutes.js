const express = require("express");
const router = express.Router();
postController = require("../controllers/postControllers");

router.route("/users").get(postControllers.getUsers);
router.route("/users/:id").get(postControllers.getUser);
router.route("/users").post(postControllers.createUser);
router.route("/users/:id").put(postControllers.updateUser);

module.exports = router;
