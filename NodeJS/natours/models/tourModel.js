const mongoose = require("mongoose");
const slugify = require("slugify");
const validator = require("validator");

const tourSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A tour must have a name"],
      unique: true,
      maxlength: [40, "A tour name should be less than 40 chars"],
      minlength: [10, "A tour name should be greater than 10 chars"],
      // validate: [validator.isAlpha, "All characters should be alphabetic"],
      trim: true,
    },
    slug: String,
    price: {
      type: Number,
      required: [true, "A tour must have a price"],
    },
    duration: {
      type: Number,
      required: [true, "A tour must have a duration"],
    },
    maxGroupSize: {
      type: Number,
      required: [true, "A tour must have a maximum group size"],
    },
    difficulty: {
      type: String,
      required: [true, "A tour must have a difficulty"],
      enum: {
        values: ["easy", "medium", "difficult"],
        message: "Difficulty is either: easy, medium, difficult",
      },
    },
    ratingsAverage: {
      type: Number,
      default: 4.5,
      max: [5, "Ratings must be below 5"],
      min: [1, "Ratings must be above 1"],
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    priceDiscount: {
      type: Number,
      validate: {
        // this function won't work for update query, works only when creating a new doc
        // this points to current document on new document creation
        validator: function (val) {
          return val < this.price;
        },
        message: "Discount price {{VALUE}} should be below regular price",
      },
    },
    summary: {
      type: String,
      trim: true,
      required: [true, "A tour must have a summary"],
    },
    description: {
      type: String,
      trim: true,
    },
    imageCover: {
      type: String,
      trim: true,
      required: [true, "A tour must have a cover image"],
    },
    images: [String],
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    startDates: [Date],
    secretTour: {
      type: Boolean,
      default: false,
    },
  },
  {
    // virtual to be part of response object
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Virtual properties that are not persistent, i.e. not stored in database, its basically for conversion from one unit to other

tourSchema.virtual("durationWeeks").get(function () {
  return this.duration / 7;
});

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
tourSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

// tourSchema.pre("save", function (next) {
//   console.log("Will save document");
//   next();
// });

// tourSchema.post("save", function (doc, next) {
//   console.log(doc);
//   next();
// });

// QUERY MIDDLEWARE

tourSchema.pre("/^find/", function (next) {
  this.find({ secretTour: { $ne: true } });
  this.start = Date.now();
  next();
});

tourSchema.post(/^find/, function (docs, next) {
  console.log(`Query took ${Date.now() - this.start} ms`);
  // console.log(docs);
  next();
});

// AGGREGATION MIDDLEWARE

tourSchema.pre("aggregate", function (next) {
  this.pipeline().unshift({ $match: { secretTour: { $ne: true } } });
  console.log(this);
  next();
});

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;

// Mongoose middleware are also called pre and post hooks: Document, query and aggreagte
