

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const ChatButtonFetch = () => {
  const [chats, setChats] = useState([]);
  const [error, setError] = useState(null);

  const fetchChats = async () => {
    try {
      const response = await fetch('http://localhost:3001/chat/get-chats'); // Adjust endpoint as needed
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setChats(data);
      setError(null);
    } catch (error) {
      console.error('Error fetching chats:', error);
      setError('Error fetching chats. Please try again later.');
      setChats([]);
    }
  };

  return (
    <div>
      <button className="btn btn-danger mt-2" onClick={fetchChats} style={{width: "100%", backgroundColor: '#d71e1f',
        height: '40px',
        color: 'white',}}>
        See Previous Chats
      </button>
      {error && <p>{error}</p>}
      <ul>
        {chats.map(chat => (
          <li key={chat._id}>
            <Link to={`/chats/${chat._id}`}>{chat.message || chat._id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatButtonFetch;



