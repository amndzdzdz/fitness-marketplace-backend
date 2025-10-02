const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "A username is required"],
    },
    email: {
      type: String,
      required: [true, "An email is required"],
    },
    password: {
      type: String,
      required: [true, "A password is required"],
    },
    profileInfo: {
      bio: {
        type: String,
      },
      goal: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
