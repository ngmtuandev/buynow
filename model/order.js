const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    product: [
      {
        product: {
          type: mongoose.Types.ObjectId,
          ref: "Product",
        },
        total: Number,
        color: String,
      },
    ],
    status: {
      type: String,
      default: "process",
      enum: ["cancel", "process", "success"],
    },
    orderBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);
