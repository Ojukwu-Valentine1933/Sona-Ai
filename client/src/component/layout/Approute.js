import SplashScreenPage from "../../pages/SplashScreenPage";
import SignUpPage from "../../pages/SignUpPage";
import NewChatPage from "../../pages/NewChatPage";
import { Routes, Route } from "react-router-dom";


const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<SplashScreenPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/chat/:chatId" element={<NewChatPage />} />  
      <Route path="/new-chat" element={<NewChatPage />} />
    </Routes>
  );
};
export default AppRoute;
