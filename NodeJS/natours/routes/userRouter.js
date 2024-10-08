const express = require("express");
const authController = require("./../controllers/authController");
const userController = require("./../controllers/userController");

const router = express.Router();

router.route("/signup").post(authController.signup);

router.route("/login").post(authController.login);

router.route("/forgot").post(authController.forgotPassword);
router.route("/reset/:token").patch(authController.resetPassword);

router.route("/").get(userController.getAllUsers);

module.exports = router;
