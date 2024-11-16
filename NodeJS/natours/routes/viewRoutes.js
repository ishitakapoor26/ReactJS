const express = require("express");
const router = express.Router();
const viewController = require("../controllers/viewsController");
const authController = require("../controllers/authController");

router.get("/", authController.isLoggedIn, viewController.getOverview);

router.get("/tour/:slug", authController.isLoggedIn, viewController.getTours);

router.get("/login", authController.isLoggedIn, viewController.getLoginForm);

router.get("/me", authController.protect, viewController.getAccount);

router.post(
  "/submit-user-data",
  authController.protect,
  viewController.updateUserData
);

module.exports = router;