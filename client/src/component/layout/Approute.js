import SplashScreenPage from "../../pages/SplashScreenPage";
import SignUpPage from "../../pages/SignUpPage";
import NewChatPage from "../../pages/NewChatPage";
import ChatPage from "../../pages/ChatPage";
import { Routes, Route } from "react-router-dom";


const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<SplashScreenPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/chats/:chatId" element={<ChatPage/>} />
      <Route path="/chat/:chatId" element={<NewChatPage/>}/>  
      <Route path="/new-chat" element={<NewChatPage />} />
      {/* <Route path="/chats" element={<ChatPage />} /> */}
    </Routes>
  );
};
export default AppRoute;
