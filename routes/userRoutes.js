const express = require("express");
const {
  loginUser,
  updateUser,
  getCurrentUser,
  registerUser,
  deleteUser,
} = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router
  .get("/current", validateToken, getCurrentUser)
  .put("/current", validateToken, updateUser)
  .delete("/current", validateToken, deleteUser);

module.exports = router;
