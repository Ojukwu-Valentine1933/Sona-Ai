import React, { useEffect, useRef, useState } from "react";

import Lottie from "lottie-react";
import { useNavigate, useParams } from "react-router-dom";
import { io } from "socket.io-client";
import animationData from "../../assets/Animation/Animation - 1720692545316.json";
import { useSpeech } from "react-text-to-speech";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useSelector } from "react-redux";
import styles from "./NewChat.module.css";

let BASE_URL;
if (process.env.NODE_ENV === "production") {
  BASE_URL = process.env.REACT_APP_API_PROD_BASE_URL;
} else {
  BASE_URL = process.env.REACT_APP_API_DEV_BASE_URL;
}

const NewChat = () => {
  const {chatId} = useParams();
  const socket = useRef(io(BASE_URL));
  const [text, setText] = useState("");
  const { user } = useSelector((state) => state.userState);
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const { speechStatus, isInQueue, start, pause, stop } = useSpeech({ text });
  const [audioFiles, setAudioFiles] = useState([]);
  const navigate = useNavigate
  


  useEffect(() => {
    if (chatId) {
      // Fetch existing chat data if chatId is present
      const fetchChat = async () => {
        try {
          const response = await fetch(`${BASE_URL}/chats/${chatId}`);
          const data = await response.json();
          setText(data.message);
        } catch (error) {
          console.error('Error fetching chat:', error);
        }
      };
      fetchChat();
    } else {
      // Create a new chat if chatId is not present
      const createNewChat = async () => {
        try {
          const response = await fetch(`${BASE_URL}/save/chats`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: 'New chat message' }),
          });

          const data = await response.json();
          // Navigate to the new chat page with chatId
          navigate(`/chat/${data.chatId}`);
        } catch (error) {
          console.error('Error creating chat:', error);
        }
      };
      createNewChat();
    }
  }, [chatId, navigate]);




//   const fetchAudioFiles = async () =>{
//     try {
//       const response = await fetch('http://localhost:3001/audio-files');
//       if (!response.ok){
//         throw new Error("Failed to fetch audio files")
// ;      }

// const data = await response.json();
// setAudioFiles(data)
//     } catch (error) {
//       console.error("Error fetching audio files", error)
//     }
//     }
    // useEffect(() => {
    //   fetchAudioFiles();
    // }, []);

  useEffect(() => {
    socket.current.emit("joinRoom", {
      userData: { username: user?.firstName },
      room: user?.firstName,
    });

    socket.current.on("message", (msg) => {
      setText(msg.message);
    });
  }, [user, socket]);

  useEffect(() => {
    if (transcript && !listening) {
      socket.current.emit("chatMessage", {
        message: transcript,
        user: { username: user?.firstName, profileImage: user?.profilePicture },
      });
    }
  }, [transcript, listening]);

  useEffect(() => {
    if (!isInQueue) {
      setText("");
    }
  }, [isInQueue]);

  useEffect(() => {
    if (text) {
      start();
    }
  }, [text]);

  useEffect(() => {
    if (listening || !text) {
      stop();
    }
  }, [listening]);

  return (
    <>
      <div style={{ backgroundColor: "#202020", height: "100vh" }}>
      
        {!listening ? (
          <div
            className="fixed-bottom mb-5"
            style={{
              display: "flex",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <button
              className=""
              onClick={SpeechRecognition.startListening}
              style={{ backgroundColor: "#202020", border: "#202020" }}
            >
              {/* <i
                className={`fa-solid fa-microphone ${styles.chatActivator}`}
              ></i> */}
              <i class={`fa-solid fa-microphone ${styles.chatActivator}`}></i>
            </button>


            
          </div>
          
        ) : (
          <>
            <Lottie
              className={`${styles.soundWave}`}
              animationData={animationData}
              style={{ height: "600px" }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <button
                className=""
                style={{
                  display: "flex",
                  justifyContent: "center",
                  cursor: "pointer",
                  backgroundColor: "#202020",
                  border: "#202020",
                }}
                onClick={SpeechRecognition.stopListening}
              >
                <i className={`fa-solid fa-xmark ${styles.chatActivator}`}></i>
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default NewChat;

