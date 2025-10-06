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

//@desc get all workout from a user
//@route GET /api/workout/all
//@acces private
const getWorkouts = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const workoutRoutines = await Workout.find({ userId: userId });
  if (!workoutRoutines) {
    res.status(200).json({ message: [] });
  } else {
    res.status(200).json({ message: workoutRoutines });
  }
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
  getWorkouts,
  getWorkout,
  updateWorkout,
  deleteWorkout,
};
