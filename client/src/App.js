import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import LoginSignup from './Components/LoginSignup/LoginSignup';
import Signup from './Components/LoginSignup/Signup';
import Home from './Components/LoginSignup/Home';
import Dashboard from './Pages/Dashboard';
import RequireAuth from './Components/Auth/RequireAuth'; // Make sure this exists

function App() {
  const user = JSON.parse(localStorage.getItem('loggedInUser'));

  return (
    <Router>
      <Routes>

        {/* Login route (prevent access if already logged in) */}
        <Route
          path="/"
          element={!user ? <LoginSignup /> : <Navigate to="/dashboard" replace />}
        />

        {/* Signup route (prevent access if already logged in) */}
        <Route
          path="/signup"
          element={!user ? <Signup /> : <Navigate to="/dashboard" replace />}
        />

        {/* Optional public home route */}
        <Route path="/home" element={<Home />} />

        {/* Protected dashboard route */}
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />

        {/* Catch-all route */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </Router>
  );
}

export default App;
