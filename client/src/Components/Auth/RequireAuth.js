import React from 'react';
import { Navigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('loggedInUser'));
  return user ? children : <Navigate to="/" replace />;
};

export default RequireAuth;
