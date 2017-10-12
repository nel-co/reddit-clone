import React from 'react'

import '../CSS/Footer.css';

const Footer = () => {
  return (
    <footer className="Footer-section">
      <div className="Footer-column">
        <div className="Footer-head">About</div>
        <div className="Footer-links">
          <a href="https://www.reddit.com/blog/" rel="noopener noreferrer" target="_blank">blog</a>
          <a href="https://about.reddit.com/" rel="noopener noreferrer" target="_blank">about</a>
          <a href="https://about.reddit.com/press/" rel="noopener noreferrer" target="_blank">press</a>
          <a href="https://www.reddit.com/code/" rel="noopener noreferrer" target="_blank">source code</a>
          <a href="https://www.reddit.com/advertising/" rel="noopener noreferrer" target="_blank">advertise</a>
          <a href="https://about.reddit.com/careers/" rel="noopener noreferrer" target="_blank">careers</a>
        </div>
      </div>
      <div className="Footer-column">
        <div className="Footer-head">Help</div>
        <div className="Footer-links">
          <a href="https://www.reddit.com/rules/" rel="noopener noreferrer" target="_blank">site rules</a>
          <a href="https://www.reddithelp.com/" rel="noopener noreferrer" target="_blank">faq</a> 
          <a href="https://www.reddit.com/wiki/" rel="noopener noreferrer" target="_blank">wiki</a> 
          <a href="https://www.reddit.com/wiki/reddiquette/" rel="noopener noreferrer" target="_blank">reddiquette</a> 
          <a href="https://www.reddit.com/help/healthycommunities/" rel="noopener noreferrer" target="_blank">mod guidelines</a> 
          <a href="https://www.reddit.com/contact/" rel="noopener noreferrer" target="_blank">contact us</a> 
        </div>
      </div>
      <div className="Footer-column">
        <div className="Footer-head">Apps & Tools</div>
        <div className="Footer-links">
          <a href="https://itunes.apple.com/us/app/reddit-the-official-app/id1064216828?mt=8" rel="noopener noreferrer" target="_blank">reddit for iPhone</a>
          <a href="https://play.google.com/store/apps/details?id=com.reddit.frontpage" rel="noopener noreferrer" target="_blank">reddit for Android</a>
          <a href="https://www.reddit.com/#" rel="noopener noreferrer" target="_blank">mobile website</a>
          <a href="https://www.reddit.com/buttons/" rel="noopener noreferrer" target="_blank">buttons</a>
        </div>
      </div>
      <div className="Footer-column">
        <div className="Footer-head">{'<3'}</div>
        <div className="Footer-links">
          <a href="https://www.reddit.com/gold/about/" rel="noopener noreferrer" target="_blank">reddit gold</a>
          <a href="http://redditgifts.com/" rel="noopener noreferrer" target="_blank">reddit gifts</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;