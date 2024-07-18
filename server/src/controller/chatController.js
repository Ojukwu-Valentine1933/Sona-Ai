const chatHelpers = require('../helpers/chatHelpers');

// Example controller function to handle adding audio recording to a chat
const addAudioRecording = async (req, res) => {
  const { chatId } = req.params; // Assuming chatId is passed as a parameter
  const { audioUrl } = req.body; // Assuming audioUrl is sent in the request body

  try {
    await chatHelpers.addAudioRecordingToChat(chatId, audioUrl);
    res.status(200).send('Audio recording added successfully');
  } catch (error) {
    console.error('Error adding audio recording:', error.message);
    res.status(500).send('Error adding audio recording');
  }
};

module.exports = {
  addAudioRecording,
  // Other controller functions related to chats can be added here
};
