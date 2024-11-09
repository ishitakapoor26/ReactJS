const mongoose = require("mongoose");

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

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;

// POST /tour/1546413213fsdfsfs/reviews <-- Nested Routes
