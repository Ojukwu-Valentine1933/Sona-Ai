const express = require('express');
const router = express.Router();
const Chat = require('../model/NewChatModel');
// const Authenticate = require("../middlewares/Authenticate")

// Route to create a new chat
router.post('/new-chat',  async (req, res) => {
  try {
    // Create a new chat using MongoDB ObjectId (automatically generated)
    const newChat = await Chat.create({
      message: req.body.message,
      // Add more fields as needed
    });
    
    if (newChat) {
        console.log("New chat created successfully");
    } else {
        console.log("New chat not created");
    }

    // Return the generated chat ID in the response
    res.json({ chatId: newChat._id });
  } catch (error) {
    console.error('Error creating chat:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to get previous chats
router.get('/get-chats',  async (req, res) => {
  try {
    const chats = await Chat.find();
    const chatUrls = chats.map(chat => ({
      _id: chat._id,
      url: `/chats/${chat._id}`, // Adjust this URL format based on your routing setup
      message: chat.message // Optionally include other chat details
    }));
    res.json(chatUrls);
  } catch (err) {
    console.error('Error fetching chats:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});




module.exports = router;




