const Tour = require("../models/tourModel");
const catchAsync = require("../utils/catchAsync");

exports.getOverview = catchAsync(async (req, res, next) => {
  // 1) Get Tour data from collection
  const tours = await Tour.find();
  // 2) Build template
  // 3) Render the template using tour data from 1)
  res.status(200).render("overview", {
    title: "Exciting tours for adventurous people",
    tours,
  });
});

exports.getTours = catchAsync(async (req, res, next) => {
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: "reviews",
    fields: "review rating user",
  });
  res.status(200).render("tour", {
    title: `${tour.name} Tour`,
    tour,
  });
});

// .set(
//   "Content-Security-Policy",
//   "default-src 'self' https://*.mapbox.com ; base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src https://cdnjs.cloudflare.com https://api.mapbox.com 'self' blob: ;script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests;"
// )

exports.getLoginForm = catchAsync(async (req, res, next) => {
  res.status(200).render("login", {
    title: "Log into your account",
  });
});

// .set(
//   "Content-Security-Policy",
//   "default-src *; connect-src *; font-src 'self' https://fonts.gstatic.com data:; base-uri 'self'; block-all-mixed-content; form-action 'self'; frame-ancestors 'self'; object-src 'none'; script-src 'self' https://cdnjs.cloudflare.com https://api.mapbox.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; upgrade-insecure-requests;"
// )
