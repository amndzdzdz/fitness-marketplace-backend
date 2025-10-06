const asyncHandler = require("express-async-handler");
const Weight = require("../models/weightModel");

//@desc Get the weight
//@route GET api/weight/current
//@access private
const getWeight = asyncHandler(async (req, res) => {
  const { date } = req.body;
  if (!date) {
    res.status(400);
    throw new Error("A date is required to fetch the weight");
  }
  const currentWeight = await Weight.findOne({
    userId: req.user.id,
    date: date,
  });
  if (!currentWeight) {
    res.status(400);
    throw new Error(`There is no weight for the date: ${date}`);
  }
  res.status(200).json({ weight: currentWeight });
});

//@desc Set the weight
//@route POST api/weight/current
//@access private
const setWeight = asyncHandler(async (req, res) => {
  const { date, weight } = req.body;
  if (!date || !weight) {
    res.status(400);
    throw new Error("Date and weight is mandatory");
  }
  const userId = req.user.id;
  const createdWeight = await Weight.create({
    userId: userId,
    date: date,
    weight: weight,
  });
  res.status(200).json(createdWeight);
});

//@desc Update the weight
//@route PUT api/weight/current
//@access private
const updateWeight = asyncHandler(async (req, res) => {
  const { date, weight } = req.body;
  if (!date || !weight) {
    res.status(400);
    throw new Error("Date and weight are required!");
  }
  console.log(`Date: ${date} and weight: ${weight}`);
  const userId = req.user.id;
  const weightExists = await Weight.findOne({ userId: userId, date: date });
  if (!weightExists) {
    res.status(400);
    throw new Error("The weight doesnt exist");
  }
  const updatedWeigth = await Weight.findOneAndUpdate(
    {
      userId: userId,
      date: date,
    },
    { weight: weight }
  );
  res.status(200).json({ message: updateWeight });
});

//@desc Delete weight
//@route DELETE api/weight/current
//@access private
const deleteWeight = asyncHandler(async (req, res) => {
  const { date } = req.body;
  if (!date) {
    res.status(400);
    throw new Error("Date is required");
  }
  const userId = req.user.id;
  const weightExists = await Weight.findOne({ userId: userId, date: date });
  if (!weightExists) {
    res.status(400);
    throw new Error("The weight doesnt exist");
  }
  const deletedWeight = await Weight.findOneAndDelete({
    userId: userId,
    date: date,
  });
  res.status(200).json({ message: deletedWeight });
});

module.exports = { getWeight, setWeight, updateWeight, deleteWeight };
