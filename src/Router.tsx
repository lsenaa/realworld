import { Route, Routes } from "react-router-dom";
import ArticlePage from "./pages/ArticlePage";
import EditArticlePage from "./pages/EditArticlePage";
import HomePage from "./pages/Homepage";
import NewArticlePage from "./pages/NewArticlePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";
import SettingPage from "./pages/SettingPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<SignInPage />} />
      <Route path="/register" element={<SignUpPage />} />
      <Route path="/profile/:username/*" element={<ProfilePage />} />
      <Route path="/settings" element={<SettingPage />} />
      <Route path="/article/:slug" element={<ArticlePage />} />
      <Route path="/editor" element={<NewArticlePage />} />
      <Route path="/editor/:slug" element={<EditArticlePage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
