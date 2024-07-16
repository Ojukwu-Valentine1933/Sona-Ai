const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const audioSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  url: { type: String, required: true },
  mimetype: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const chatSchema = new Schema(
  {
    title: { type: String },
    audioMedia: { type: [audioSchema], default:[] },
  },
  { timestamps: true }
);
const Chat = mongoose.model("Chat", userSchema);

module.exports = Chat;
