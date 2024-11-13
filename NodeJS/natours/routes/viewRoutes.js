const express = require("express");
const router = express.Router();
const viewController = require("../controllers/viewsController");
const authController = require("../controllers/authController");

router.use(authController.isLoggedIn);

router.get("/", viewController.getOverview);

router.get("/tour/:slug", viewController.getTours);

router.get("/login", viewController.getLoginForm);

module.exports = router;
