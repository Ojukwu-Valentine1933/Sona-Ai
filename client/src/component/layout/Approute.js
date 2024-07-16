import SplashScreenPage from "../../pages/SplashScreenPage";
import SignUpPage from "../../pages/SignUpPage";
import NewChatPage from "../../pages/NewChatPage";
import GoogleAuthPage from "../../pages/GoogleAuthPage";
import { Routes, Route } from "react-router-dom";
import ProfilePage from "../../pages/ProfilePage";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<SplashScreenPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/new-chat" element={<NewChatPage />} />
      <Route path="/auth" element={<GoogleAuthPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
};
export default AppRoute;
