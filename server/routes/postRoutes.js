const express = require("express");
const router = express.Router();
postControllers = require("../controllers/postControllers");

router.route("/").get(postControllers.getUsers);
router
  .route("/:id")
  .get(postControllers.getUser)
  .put(postControllers.updateUser)
  .delete(postControllers.deleteUser);

module.exports = router;
