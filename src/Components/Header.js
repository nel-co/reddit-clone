import React from 'react';
import '../CSS/Header.css';

const Header = () => {
  return (
    <header className="Header-section">
      <div className="Header-logo">Reddit</div>
      <div className="Header-links">
        <a href="https://www.reddit.com/submit?selftext=true" target="_blank">Submit a Text Post</a>
        <a href="https://www.reddit.com/submit" target="_blank" className="orange-link">Submit a New Link</a>
      </div>
    </header>
  );
}

export default Header;
