const asyncHandler = require("express-async-handler");
const WorkoutSession = require("../models/workoutSessionModel");

//@desc Get one workoutSessions
//@route GET /api/workoutSession
//@access private
const getWorkoutSession = asyncHandler(async (req, res) => {
  const { workoutSessionId } = req.query;
  if (!workoutSessionId) {
    res.status(400);
    throw new Error("WorkoutSessionId is required");
  }
  const userId = req.user.id;
  const workoutSession = await WorkoutSession.findOne({
    _id: workoutSessionId,
    userId: userId,
  });
  if (!workoutSession) {
    res.status(400);
    throw new Error("WorkoutSession does not exist");
  }
  res.status(200).json({ message: workoutSession });
});

//@desc Gets all the workoutSessions
//@route GET /api/workoutSession/all
//@access private
const getWorkoutSessions = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const workoutSessions = await WorkoutSession.find({ userId: userId });
  res.status(200).json({ message: workoutSessions });
});

//@desc Create a workoutSession
//@route POST /api/workoutSession/
//@access private
const createWorkoutSession = asyncHandler(async (req, res) => {
  const { workoutId, sessionInfo } = req.body;
  if (!workoutId || sessionInfo.length === 0) {
    res.status(400);
    throw new Error("All fields are required!");
  }
  const userId = req.user.id;
  const workoutSession = await WorkoutSession.create({
    userId: userId,
    workoutId: workoutId,
    sessionInfo: sessionInfo,
  });
  if (!workoutSession) {
    res.status(400);
    throw new Error("An error occured creating the workoutSession");
  }
  res.status(200).json({ message: workoutSession });
});

module.exports = {
  createWorkoutSession,
  getWorkoutSession,
  getWorkoutSessions,
};
