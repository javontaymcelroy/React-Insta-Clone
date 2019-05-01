import React, { Component } from 'react';
import './App.css';
import PostContainer from './components/PostContainer';
import dummyData from './dummy-data';
import LoginPage from './components/Login';
import Authenticate from './components/Authenticate';
import SearchBar from './components/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData,
      search: ''
    };
  }

  updateSearch = event => {
    if (event.target.value === '') {
      this.setState({ dummyDate: dummyData });
      return;
    }

    let word = event.target.value;

    this.setState(state => {
      state.dummyData = state.dummyData.filter(post => {
        if (post.username.includes(word)) {
          return true;
        } else {
          return false;
        }
      });
      return { dummyData: state.dummyData };
    });
  };

  render() {
    return (
      <div className='App'>
        <SearchBar updateSearch={this.updateSearch} />
        {this.state.dummyData.map(post => (
          <PostContainer post={post} />
        ))}
      </div>
    );
  }
}

export default Authenticate(App)(LoginPage);
