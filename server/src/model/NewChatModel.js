// server/models/chatModel.js

const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  // No need to explicitly define `_id` unless you need to customize it
});

module.exports = mongoose.model('Chat', chatSchema);

