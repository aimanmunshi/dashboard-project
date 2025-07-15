import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './LoginSignup.css';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const LoginSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const result = await response.json();

      if (result.success) {
        // ✅ Login success – optionally store user info
        localStorage.setItem('loggedInUser', JSON.stringify({ email }));
        navigate('/Dashboard'); // Redirect to dashboard
      } else {
        alert(result.message || 'Invalid email or password');
      }

    } catch (error) {
      console.error('Login error:', error);
      alert('Server error. Please try again later.');
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2 className="title">Login</h2>

        <div className="input-group">
          <img src={email_icon} alt="email" className="icon" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <img src={password_icon} alt="password" className="icon" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="login-btn" onClick={handleLogin}>Login</button>

        <p className="switch-text">
          Don’t have an account? <Link to="/signup" className="switch-link">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
