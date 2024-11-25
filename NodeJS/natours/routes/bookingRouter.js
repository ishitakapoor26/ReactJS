const express = require("express");
const bookingController = require("./../controllers/bookingController");
const router = express.Router({ mergeParams: true });
const authController = require("./../controllers/authController");

router.use(authController.protect);

router.get(
  "/checkout-session/:tourID",
  authController.protect,
  bookingController.getCheckoutSession
);

module.exports = router;
