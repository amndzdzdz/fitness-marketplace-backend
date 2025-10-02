const asyncHandler = require("express-async-handler");

const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User login" });
});

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User register" });
});

const getCurrentUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Current user" });
});

const updateUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Updated user" });
});

const deleteUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "deleted user" });
});

module.exports = {
  loginUser,
  registerUser,
  getCurrentUser,
  updateUser,
  deleteUser,
};
