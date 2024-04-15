const express = require("express");
const router = express.Router();
postController = require("../controllers/postControllers");

router.route("/api").get(postControllers.getUsers);
router.route("/api/:id").get(postControllers.getUser);
router.route("/api/:id").put(postControllers.updateUser);
router.route("/api/:id").delete(postControllers.deleteUser);

module.exports = router;
