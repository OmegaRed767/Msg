const mongoose = require("mongoose");

const ChatSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    participant: [
      {
        user: {
          types: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "User",
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Chat", ChatSchema);
