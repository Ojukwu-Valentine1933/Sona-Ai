const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  message: { type: String, required: true },
  audioRecordings: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
  
  // No need to explicitly define `_id` unless you need to customize it
});

module.exports = mongoose.model('Chat', chatSchema);


