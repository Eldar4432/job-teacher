import React from 'react';
import { Routes, Route } from 'react-router-dom';
import i18n from './i18next/i18next';
import LandingPage from './pages/LandingPage';
import Resume from './pages/Resume';
import TeamPage from './pages/TeamPage';
import NotFoundPage from './pages/NotFoundPage';
import LoginSignup from './pages/LoginSignup';
import './assets/css/styles.css';


const isAuthenticated = () => {
  return true;
};

const PrivateRoute = ({ element, ...props }) => {
  return isAuthenticated() ? element : null; 
};

function App(props) {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginSignup />} />
      <Route path="/resume" element={<PrivateRoute element={<Resume />} />} />
      <Route path="/jobs" element={<TeamPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
