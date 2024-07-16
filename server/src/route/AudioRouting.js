const multer = require("multer");
const path = require("path");
const fs = require("fs");
const Audio = require("../model/AudioModel");
const express = require("express");
const router = express.Router();
const { s3UploadSingle } = require("../helpers/s3Service");
const { upload } = require("../middlewares/multer");

// Upload audio file
router.post("/upload-audio", upload.single("audio"), async (req, res) => {
  const { chatId } = req.params;
  // const chat = await 
  if (!req.file) {
    return res.status(400).send("No file uploaded");
  } else {
    console.log(req.file);
  }

  try {
    const { filename, contentType, url } = await s3UploadSingle(req.file);
    console.log(url);
    res.status(200).json({ message: "File uploaded successfully" });
  } catch (error) {
    res.status(500).send("Error saving audio information");
  }
});

// Retrieve audio files
router.get("/audio-files", async (req, res) => {
  try {
    const audioFiles = await Audio.find();
    res.status(200).json(audioFiles);
  } catch (error) {
    res.status(500).send("Error retrieving audio files");
  }
});

module.exports = router;
