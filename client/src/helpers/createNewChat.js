import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateNewChatButton = ({ onCreate }) => {
  const [isCreating, setIsCreating] = useState(false); // State to track creation process
  const navigate = useNavigate();

  const handleCreateNewChat = async () => {
    if (isCreating) return; // Prevent multiple clicks while creating
    setIsCreating(true); // Set state to indicate creation process

    try {
      const response = await axios.post('https://sona-ai-4.onrender.com/chat/new-chat', {
        message: 'New chat message',
      });

      onCreate(response.data.chatId);
      navigate(`/chat/${response.data.chatId}`); // Navigate to the new chat page with the chatId
    } catch (error) {
      console.error('Error creating new chat:', error);
    } finally {
      setIsCreating(false); // Reset state after creation process completes
    }
  };

  return (
    <button
      onClick={handleCreateNewChat}
      disabled={isCreating} // Disable button during creation process
      style={{
        width: '100%',
        backgroundColor: '#d71e1f',
        height: '40px',
        color: 'white',
        borderRadius: '5px',
        border: '#d71e1f',
        cursor: isCreating ? 'not-allowed' : 'pointer', // Change cursor based on state
      }}
    >
      {isCreating ? 'Creating Chat...' : 'Create New Chat'}
    </button>
  );
};

export default CreateNewChatButton;




