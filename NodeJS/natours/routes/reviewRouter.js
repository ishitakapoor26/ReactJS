const express = require("express");
const reviewController = require("./../controllers/reviewController");
const router = express.Router({ mergeParams: true });
const authController = require("./../controllers/authController");

router
  .route("/")
  .get(authController.protect, reviewController.getAllReviews)
  .post(
    authController.protect,
    authController.restrictTo("user"),
    reviewController.setTourUserIds,
    reviewController.addReviews
  );

router
  .route("/:id")
  .delete(authController.protect, reviewController.deleteReviews)
  .patch(authController.protect, reviewController.updateReviews)
  .get(authController.protect, reviewController.getReviews);

module.exports = router;
