const express = require("express");
const reviewController = require("./../controllers/reviewController");
const router = express.Router({ mergeParams: true });
const authController = require("./../controllers/authController");

router
  .route("/")
  .get(authController.protect, reviewController.getAllReviews)
  .post(authController.protect, reviewController.addReviews);

router
  .route("/:id")
  .delete(authController.protect, reviewController.deleteReviews);

module.exports = router;
