import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import NotFoundPage from "./pages/NotFoundPage";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />

        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
