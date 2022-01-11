const mongoose = require("mongoose");

const OtpSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    number: { type: String, required: true },
    _otp: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, index: { expires: 100 } },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Otp", OtpSchema);
