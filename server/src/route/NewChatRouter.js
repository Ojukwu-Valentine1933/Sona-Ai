// server/routes/chatRoutes.js

const express = require('express');
const router = express.Router();
const Chat = require('../model/NewChatModel');

// Route to create a new chat
router.post('/chats', async (req, res) => {
  try {
    // Create a new chat using MongoDB ObjectId (automatically generated)
    const newChat = await Chat.create({
      message: req.body.message,
      // Add more fields as needed
    });
    if (newChat) {
        console.log("New chat created success fully")
    }else{
        console.log("New chat not created")
    }

    // Return the generated chat ID in the response
    res.json({ chatId: newChat._id });
  } catch (error) {
    console.error('Error creating chat:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
