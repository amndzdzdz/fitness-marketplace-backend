const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

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
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are required!");
  }
  const availableUser = await User.findOne({ email });
  if (availableUser) {
    res.status(400);
    throw new Error("Email address already exists");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const createdUser = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  if (createdUser) {
    res.status(201).json({
      _id: createdUser.id,
      email: createdUser.email,
    });
  } else {
    res.status(400);
    throw new Error("No user was created");
  }
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
