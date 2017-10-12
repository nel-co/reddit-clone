import React, { Component } from 'react';
import PropTypes from 'prop-types'

import Header from './Header';
import Hero from './Hero';
import Menu from './Menu';
import Loading from './Loading';
import RedditLinks from './RedditLinks';
import Footer from './Footer';

import '../CSS/App.css';

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      subReddit: 'r/popular',
      links: [],
      isDropdownToggled: false,
      loading: true
    }
  }

  static PropTypes = {
    subReddit: PropTypes.string.isRequired,
    links: PropTypes.array.isRequired
  }

  componentDidMount = () => {
    fetch(`https://cors-anywhere.herokuapp.com/https://reddit.com/${this.state.subReddit}/.json`)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          links: json.data.children
        })
      })
      setTimeout(() => this.setState({ loading: false }), 2400)    
  }

  changeSubReddit = (subReddit) => {
    this.setState({ loading: true })
    fetch(`https://cors-anywhere.herokuapp.com/https://reddit.com/${subReddit}/.json`)
    .then((response) => response.json())
    .then((json) => {
      this.setState({
        links: json.data.children
      })
    })
    setTimeout(() => this.setState({ loading: false }), 2400)        
    this.handleDropdown();
    document.addEventListener('keydown', this.handleInput);
  }

  handleDropdown = () => {
    this.setState({
      isDropdownToggled: !this.state.isDropdownToggled
    })
  }

  handleInput = (e) => {
    if (e.key === 'Enter' && e.target.value !== undefined) {
      e.preventDefault();
      e.stopPropagation();
      this.setState({
        subReddit: e.target.value
      })
      this.formatSubReddit(this.state.subReddit);
    }
  }

  handleSubredditSelect = (e) => {
    if(e.target.tagName === 'SPAN') {
      this.changeSubReddit(e.target.innerHTML);
      this.setState({
        subReddit: e.target.innerHTML
      })
    }
  }

  formatSubReddit = (userInput) => {
    const re = /r\//;
    if(re.test(userInput)) {
      this.setState({
        subReddit: userInput
      })
      this.changeSubReddit(this.state.subReddit);
    } else {
        this.setState({
          subReddit: `r/${userInput}`
        })
        this.changeSubReddit(this.state.subReddit);
    }
  }

  render() {    
    const props = {
      subReddit: this.state.subReddit,
      links: this.state.links,
      handleInput: this.state.handleInput,
      handleSubredditSelect: this.handleSubredditSelect,
      handleDropdown: this.handleDropdown,
      changeSubReddit: this.state.changeSubReddit,
      isGlobalToggled: this.state.isGlobalToggled,
      isDropdownToggled: this.state.isDropdownToggled,
    };
    return (
      <div className="App container">
        <Header />
        <Hero />
        <Menu {...props} />
        <section className="Reddit-links">
          {this.state.loading ? <Loading /> : <RedditLinks {...props} />}
        </section>
        <Footer />
      </div>
    );
  }
}