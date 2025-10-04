const mongoose = require("mongoose");

const weightSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    date: {
      type: Date,
      required: [true],
    },
    weight: {
      type: Number,
      required: [true, "A weight is required!"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("weight", weightSchema);
