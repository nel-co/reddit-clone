import React, {Component} from 'react'
import '../CSS/Menu.css';

export default class Menu extends Component {
  render() {
    return (
      <div className="Menu-section">
        <div className="Menu-subreddit">
          <div className="subreddit-toggle noselect" onClick={this.props.handleDropdown}>
           {this.props.subReddit} { this.props.isDropdownToggled ? <i className="fa fa-chevron-up" aria-hidden="true"></i> : <i className="fa fa-chevron-down" aria-hidden="true"></i> }
          </div>
          { this.props.isDropdownToggled ? 
            <Dropdown handleSubredditSelect={this.props.handleSubredditSelect} /> : null }
        </div>
      </div>
    );
  }
}

  class Dropdown extends Component {
    render() {
      return (
        <div className="Menu-dropdown" onClick={this.props.handleSubredditSelect}>
          <input type="text" className="subreddit-name" placeholder="Try r/woahdude"/>
          <span className="Menu-item noselect">r/Popular</span>
          <span className="Menu-item noselect">r/All</span>
          <span className="Menu-item noselect">r/Pics</span>
          <span className="Menu-item noselect">r/TodayILearned</span>
          <span className="Menu-item noselect">r/WorldNews</span>
          <span className="Menu-item noselect">r/Gaming</span>
          <span className="Menu-item noselect">r/Aww</span>
          <span className="Menu-item noselect">r/Videos</span>
          <span className="Menu-item noselect">r/Javascript</span>
          <span className="Menu-item noselect">r/webdev</span>
          <span className="Menu-item noselect">r/web_design</span>
          <span className="Menu-item noselect">r/learnprogramming</span>
          <span className="Menu-item noselect">r/ProgrammerHumor</span>
          <span className="Menu-item noselect">r/discgolf</span>
          <span className="Menu-item noselect">r/nba</span>
        </div>
      );
    }
}  