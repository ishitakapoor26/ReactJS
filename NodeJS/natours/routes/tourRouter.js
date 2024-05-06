const express = require("express");
const tourController = require("./../controllers/tourController");

const router = express.Router();

router.param("id", (req, res, next, val) => {
  console.log(`Tour id is: ${val}`);
  next();
});

router.route("/").get(tourController.getAllTours).post(tourController.addTour);

router.route("/:id").patch(tourController.updateTour);

module.exports = router;
