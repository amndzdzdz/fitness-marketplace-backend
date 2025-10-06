const asyncHandler = require("express-async-handler");
const Workout = require("../models/workoutModel");

//@desc create a workout
//@route POST /api/workout
//@acces private
const createWorkout = asyncHandler(async (req, res) => {
  const { name, exercises } = req.body;
  console.log(req.body);
  if (!name || !exercises) {
    res.status(400);
    throw new Error("All fields are required!");
  }
  console.log(exercises);
  const createdWorkout = await Workout.create({
    name: name,
    userId: req.user.id,
    exercises: exercises,
  });
  res.status(200).json({ message: createdWorkout });
});

//@desc get a workout
//@route GET /api/workout/
//@acces public
const getWorkout = "";

//@desc update a workout
//@route PUT /api/workout
//@acces public
const updateWorkout = "";

//@desc delete a workout
//@route DELETE /api/workout
//@acces public
const deleteWorkout = "";

module.exports = {
  createWorkout,
  getWorkout,
  updateWorkout,
  deleteWorkout,
};
