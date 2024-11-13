const express = require("express");
const authController = require("./../controllers/authController");
const userController = require("./../controllers/userController");

const router = express.Router();

router.route("/signup").post(authController.signup);

router.route("/login").post(authController.login);

router.route("/logout").get(authController.logout);

router.route("/forgot").post(authController.forgotPassword);

router.route("/reset/:token").patch(authController.resetPassword);

// Middleware runs in sequence: Post this user will be authenticated
router.use(authController.protect);
router.use(authController.restrictTo("admin"));

router.route("/").get(userController.getAllUsers);

router.route("/updatePassword").patch(authController.updatePassword);

router.route("/updateMe").patch(userController.updateUserData);
router.route("/deleteMe").delete(userController.deleteUser);

router
  .route("/:id")
  .delete(userController.deleteUser)
  .patch(userController.updateUser)
  .get(userController.getUser);

router.route("/me").get(userController.getMe, userController.getUser);

module.exports = router;
