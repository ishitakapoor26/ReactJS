const Tour = require("../models/tourModel");
const catchAsync = require("../utils/catchAsync");

exports.getOverview = catchAsync(async (req, res, next) => {
  // 1) Get Tour data from collection
  const tours = await Tour.find();
  // 2) Build template
  // 3) Render the template using tour data from 1)
  res.status(200).render("overview", {
    tours,
  });
});

exports.getTours = (req, res) => {
  res.status(200).render("tour", {
    title: "The Forest Hiker Tour",
  });
};
