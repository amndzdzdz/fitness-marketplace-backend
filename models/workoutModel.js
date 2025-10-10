const mongoose = require("mongoose");

const exerciseSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "A name is required"],
  },
  minRepRange: {
    type: Number,
    required: [true, "A minimum rep range is required"],
  },
  maxRepRange: {
    type: Number,
    required: [true, "A maximum rep range is required"],
  },
  sets: {
    type: Number,
    required: [true, "A rep range is required"],
  },
});

const workoutSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A workout requires a name"],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    exercises: {
      type: [exerciseSchema],
      required: [true, "Exercises are required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("workout", workoutSchema);
