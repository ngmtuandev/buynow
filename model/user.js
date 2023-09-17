const mongoose = require("mongoose");

const userChema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      require: true,
      min: 5,
    },
    lastName: {
      type: String,
      require: true,
      min: 5,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: true,
      unique: true,
    },
    addres: {
      type: mongoose.Types.ObjectId,
      ref: "Address",
    },
    role: {
      type: String,
      default: "user",
    },
    cart: {
      type: Array,
      default: [],
    },
    whishlist: {
      type: mongoose.Types.ObjectId,
      ref: "Product",
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
    refreshToken: {
      type: String,
    },
    passwordChanfe: {
      type: String,
    },
    tokenResetPassword: {
      type: String,
    },
    tokenExpirePassword: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userChema);
