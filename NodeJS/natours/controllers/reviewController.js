const Review = require("../models/reviewModel");
const factory = require("./handlerFactory");

exports.setTourUserIds = (req, res, next) => {
  // Allow nested routes
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.params.id;
  next();
};

exports.getAllReviews = factory.getAllOne(Review);

exports.addReviews = factory.createOne(Review);

exports.deleteReviews = factory.deleteOne(Review);

exports.updateReviews = factory.updateOne(Review);

exports.getReviews = factory.getOne(Review);
