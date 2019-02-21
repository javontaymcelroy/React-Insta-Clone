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
      search: '',
      searchData: []
    };
  }

  updateSearch(event) {
    let postsFiltered = this.state.dummyData.filter(post => {
      if (post.username.includes(event.target.value)) {
        return post;
      }
    });

    this.setState({ searchData: postsFiltered });
  }

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
