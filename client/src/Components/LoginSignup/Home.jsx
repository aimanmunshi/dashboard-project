import React from 'react';

const Home = () => {
  const user = JSON.parse(localStorage.getItem('loggedInUser'));

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Welcome, {user?.name || 'User'} 🎉</h1>
      <p>You are now logged in.</p>
    </div>
  );
};

export default Home;
