import React, { Component } from 'react';

import '../CSS/RedditLinks.css';

export default class RedditLinks extends Component {

  componentDidMount = () => {
    document.addEventListener('keydown', this.handleInput);    
  }

  componentWillUnmount = () => {
    document.removeEventListener('keydown', this.handleInput);    
  }
  
  linkScore = (num) => {
    if (num > 100000) {
      return Math.round(num / 10000) + 'k';
    } else if (num > 10000) {
      return (num / 1000).toFixed(1) + 'k';
    } else {
      return num;
    }
  }
  
  render() {
    let RedditLinks = this.props.links.map((link, index) => {
      return (
        <div key={index} className="Link-box">
          <div className="Link-score">
            <span><i className="fa fa-caret-up" aria-hidden="true"></i></span>
            <span>{this.linkScore(link.data.ups)}</span>
          </div>
          <div className="Link-info">
            <div className="Link-info-title">
              <a href={link.data.url} target="_blank">{link.data.title}</a>
            </div>
            <div className="Link-info-user">
              Submitted by <a href={`https://reddit.com/u/${link.data.author}`} target="_blank">{link.data.author}</a>
            </div>
          </div>
          <div className="Link-subreddit">
            <a href={`https://reddit.com/r/${link.data.subreddit}`} target="_blank">r/{link.data.subreddit}</a>
          </div>
        </div>
      );
    })
    return (
      <div>
        {RedditLinks}
      </div>
    )
  }
}
