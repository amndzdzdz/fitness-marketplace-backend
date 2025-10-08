const mongoose = require("mongoose");

const workoutSessionSchema = mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    required: [true, "User ID is required"],
    ref: "User",
  },
  workoutId: {
    type: mongoose.Types.ObjectId,
    required: [true, "Workout ID is required"],
    ref: "Workout",
  },
  sessionInfo: [
    {
      exericseName: {
        type: String,
        required: [true, "Exercise name is required"],
      },
      setsInfo: [
        {
          weight: {
            type: Int,
            required: [true, "Lifted weight is required"],
          },
          reps: {
            type: Int,
            required: [true, "Reps is required"],
          },
        },
      ],
    },
  ],
});

module.exports = mongoose.model("WorkoutSession", workoutSessionSchema);
