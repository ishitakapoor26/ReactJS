const catchAsync = require("../utils/catchAsync");
const Review = require("../models/reviewModel");
const factory = require("./handlerFactory");

exports.getAllReviews = catchAsync(async (req, res, next) => {
  let filter = {};
  if (req.params.tourId) filter = { tour: req.params.tourId };
  const review = await Review.find(filter);
  res.status(200).json({
    status: "success",
    results: review.length,
    data: {
      review,
    },
  });
});

exports.setTourUserIds = (req, res, next) => {
  // Allow nested routes
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.params.id;
  next();
};

exports.addReviews = factory.createOne(Review);

exports.deleteReviews = factory.deleteOne(Review);

exports.updateReviews = factory.updateOne(Review);
