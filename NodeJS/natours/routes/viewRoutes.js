const express = require("express");
const router = express.Router();
const viewController = require("../controllers/viewsController");

router.get("/", viewController.getOverview);

router.get("/tour", viewController.getTours);

module.exports = router;
