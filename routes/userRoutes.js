const express = require("express");
const {
  loginUser,
  updateUser,
  getCurrentUser,
  registerUser,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router
  .get("/current", getCurrentUser)
  .put("/current", updateUser)
  .delete("/current", deleteUser);

module.exports = router;
