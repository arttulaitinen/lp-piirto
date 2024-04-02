const express = require("express");
const router = express.Router();
postController = require("../controllers/postControllers");

router.route("/users").get(postControllers.getUsers);
router.route("/users/:id").get(postControllers.getUser);
router.route("/users/add").post(postControllers.createUser);
router.route("/users/:id").put(postControllers.updateUser);
router.route("/users/:id").delete(postControllers.deleteUser);

module.exports = router;
