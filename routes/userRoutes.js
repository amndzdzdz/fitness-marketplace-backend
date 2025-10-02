const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  res.status(200).json({ message: "User login" });
});

router.post("/register", (req, res) => {
  res.status(200).json({ message: "User register" });
});

router.get("/current", (req, res) => {
  res.status(200).json({ message: "Current user" });
});

router.post("/current", (req, res) => {
  res.status(200).json({ message: "changed current user info" });
});

module.exports = router;
