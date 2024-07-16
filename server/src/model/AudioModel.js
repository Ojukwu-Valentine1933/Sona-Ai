const mongoose = require('mongoose');

const audioSchema = new mongoose.Schema({

  filename: { type: String, required: true },
  url: { type: String, required: true },
  mimetype: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Audio = mongoose.model('Audio', audioSchema);

module.exports = Audio;
