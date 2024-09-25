import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Features from './Features';import { pageview } from 'react-ga4';

function Home() {
  useEffect(() => {
    // Track the page view
    window.gtag('config', 'G-90NG0VBE7Z', {
      page_path: window.location.pathname,
    });
  }, []);

  return (
    <div>
      <h1>Welcome to Astute AI</h1>
      <p>This is the home page.</p>
      <Link to="/signup">Go to Signup</Link>
      <br />
      <Link to="/login">Go to Login</Link>
     <Features />
    </div>
  );
}

export default Home;
