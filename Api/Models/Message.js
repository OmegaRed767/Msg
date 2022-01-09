const mongoose = require("mongoose");
const MessageSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    chatId: { type: mongoose.Schema.Types.ObjectId, required: true },
    msg: { type: String, required: true },
    sender: { type: mongoose.Schema.Types.ObjectId, required: true },
    receiver: { type: mongoose.Schema.Types.ObjectId, required: true },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Message", MessageSchema);
