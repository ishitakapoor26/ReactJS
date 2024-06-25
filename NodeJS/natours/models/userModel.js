const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

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
    required: [true, "Password cannot be empty."],
    minlength: 8,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password."],
    validate: {
      // this works only on create and save!!!
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords are not the same!",
    },
  },
});

// Password encryption
userSchema.pre("save", async function (next) {
  // Run this function if password is not modified
  if (!this.isModified("password")) return next();

  // bcrypt algo for password hashing--explore

  // Hash the password with the cost of 12

  this.password = await bcrypt.hash(this.password, 12);

  // Delete the passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
