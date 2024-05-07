const express = require("express");
const tourController = require("./../controllers/tourController");

const router = express.Router();

router.param("id", (req, res, next, val) => {
  console.log(`Tour id is: ${val}`);
  next();
});

// Aliasing

router
  .route("/top-5-tours")
  .get(tourController.aliasTopTours, tourController.getAllTours);

router.route("/monthly-plan/:year").get(tourController.getMonthlyPlan);

router.route("/tour-stats").get(tourController.getTourStats);

router.route("/").get(tourController.getAllTours).post(tourController.addTour);

router
  .route("/:id")
  .patch(tourController.updateTour)
  .get(tourController.getTour)
  .delete(tourController.deleteTour);

module.exports = router;
