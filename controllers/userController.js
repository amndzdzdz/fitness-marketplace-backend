const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

//@desc Login the user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandaotry");
  }
  const userExists = await User.findOne({ email });
  if (userExists && (await bcrypt.compare(password, userExists.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: userExists.username,
          email: userExists.email,
          id: userExists.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1h" }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("Email or password is false");
  }
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
//@access private
const getCurrentUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Current user" });
});

//@desc Update the user info
//@route PUT /api/users/current
//@access private
const updateUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Updated user" });
});

//@desc Delete a user
//@route DELETE /api/users/login
//@access private
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
