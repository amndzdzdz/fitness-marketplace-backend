const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const Weight = require("../models/weightModel");

//@desc Get the weight
//@route GET api/weight/current
//@access public
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
//@access public
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
//@access public
const updateWeight = "";

//@desc Delete weight
//@route DELETE api/weight/current
//@access public
const deleteWeight = "";

module.exports = { getWeight, setWeight, updateWeight, deleteWeight };
