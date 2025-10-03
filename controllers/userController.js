const asyncHandler = require("express-async-handler");

//@desc Login the user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User login" });
});

//@desc Register the user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User register" });
});

//@desc Get the current user info
//@route GET /api/users/current
//@access public
const getCurrentUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Current user" });
});

//@desc Update the user info
//@route PUT /api/users/current
//@access public
const updateUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Updated user" });
});

//@desc Delete a user
//@route DELETE /api/users/login
//@access public
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
