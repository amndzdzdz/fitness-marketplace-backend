const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const Weight = require("../models/weightModel");

//@desc Get the weight
//@route GET api/weight/current
//@access public
const getWeight = "";

//@desc Set the weight
//@route POST api/weight/current
//@access public
const setWeight = "";

//@desc Update the weight
//@route PUT api/weight/current
//@access public
const updateWeight = "";

//@desc Delete weight
//@route DELETE api/weight/current
//@access public
const deleteWeight = "";

module.exports = { getWeight, setWeight, updateWeight, deleteWeight };
