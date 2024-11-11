const mongoose = require("mongoose");
const Tour = require("./tourModel");

const reviewSchema = mongoose.Schema(
  {
    review: {
      type: String,
      requried: [true, "Review cannot be empty!"],
    },
    rating: {
      type: Number,
      default: 4.0,
      max: [5, "Rating should be below 5"],
      min: [1, "Rating should be above 1"],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    tour: {
      type: mongoose.Schema.ObjectId,
      ref: "Tour",
      required: [true, "Review must belong to a tour"],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      requried: [true, "Review must belong to a user"],
    },
  },
  {
    // virtual to be part of response object
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

reviewSchema.pre(/^find/, function (next) {
  this.populate({ path: "user" });
  next();
});

reviewSchema.statics.calAverageRatings = async function (tourId) {
  const stats = await this.aggregate([
    { $match: { tour: tourId } },
    {
      $group: {
        _id: "$tour",
        nRating: { $sum: 1 },
        avgRating: { $avg: "$rating" },
      },
    },
  ]);
  console.log(stats);

  await Tour.findByIdAndUpdate(tourId, {
    ratingsQuantity: stats[0].nRating,
    ratingsAverage: stats[0].avgRating,
  });
};

reviewSchema.post("save", function () {
  // this points to current review
  this.constructor.calAverageRatings(this.tour);
});

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;

// POST /tour/1546413213fsdfsfs/reviews <-- Nested Routes
