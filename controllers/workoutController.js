const asyncHandler = require("express-async-handler");
const Workout = require("../models/workoutModel");

//@desc create a workout
//@route POST /api/workout
//@acces private
const createWorkout = asyncHandler(async (req, res) => {
  const { name, exercises } = req.body;
  if (!name || !exercises) {
    res.status(400);
    throw new Error("All fields are required!");
  }
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
//@route GET /api/workout
//@acces private
const getWorkout = asyncHandler(async (req, res) => {
  const { workoutId } = req.query;
  if (!workoutId) {
    res.status(400);
    throw new Error("Workout does not exist");
  }
  const workout = await Workout.findOne({ _id: workoutId });
  res.status(200).json({ message: workout });
});

//@desc update a workout
//@route PUT /api/workout
//@acces private
const updateWorkout = asyncHandler(async (req, res) => {
  const { workoutId, name, exercises } = req.body;
  if (!workoutId || !name || !exercises) {
    res.status(400);
    throw new Error(
      "Workout ID, name and exercises required to update workout"
    );
  }
  const userId = req.user.id;
  const updatedWorkout = await Workout.findOneAndUpdate(
    {
      userId: userId,
      _id: workoutId,
    },
    { name: name, exercises: exercises }
  );
  res.status(200).json({ message: updatedWorkout });
});

//@desc delete a workout
//@route DELETE /api/workout
//@acces private
const deleteWorkout = asyncHandler(async (req, res) => {
  const { workoutId } = req.query;
  if (!workoutId) {
    res.status(400);
    throw new Error("Workout ID required to delete workout");
  }
  const deletedWorkout = await Workout.findOneAndDelete({ _id: workoutId });
  res.status(200).json({ message: deletedWorkout });
});

module.exports = {
  createWorkout,
  getWorkouts,
  getWorkout,
  updateWorkout,
  deleteWorkout,
};
