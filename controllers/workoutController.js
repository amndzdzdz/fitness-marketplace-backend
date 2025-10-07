const asyncHandler = require("express-async-handler");
const Workout = require("../models/workoutModel");

//@desc create a workout
//@route POST /api/workout
//@acces private
const createWorkout = asyncHandler(async (req, res) => {
  const { name, exercises } = req.body;
  if (!name || !exercises) {
    res.status(404);
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
//@acces private
const getWorkout = asyncHandler(async (req, res) => {
  const { workoutId } = req.query;
  if (!workoutId) {
    res.status(404);
    throw new Error("Workout does not exist");
  }
  const workout = await Workout.findOne({ _id: workoutId });
  res.status(200).json(workout);
});

//@desc update a workout
//@route PUT /api/workout
//@acces private
const updateWorkout = "";

//@desc delete a workout
//@route DELETE /api/workout
//@acces private
const deleteWorkout = "";

module.exports = {
  createWorkout,
  getWorkouts,
  getWorkout,
  updateWorkout,
  deleteWorkout,
};
