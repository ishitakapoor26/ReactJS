const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User name must be provided."],
  },
  email: {
    type: String,
    required: [true, "Email must be provided."],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "PLease provide a valid email."],
  },
  photo: String,
  password: {
    type: String,
    validate: [validator.isStrongPassword, "PLease provide a strong password."],
    required: [true, "Password cannot be empty."],
    minlength: 8,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password."],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
