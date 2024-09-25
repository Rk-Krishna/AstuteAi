
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to Astute AI</h1>
      <p>This is the home page.</p>
      <Link to="/signup">Go to Signup</Link>
      <br />
      <Link to="/login">Go to Login</Link>
    </div>
  );
}

export default Home;
