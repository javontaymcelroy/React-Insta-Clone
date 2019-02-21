import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  render() {
    return (
      <div className='searchbar'>
        <img
          className='ig-logo'
          src='https://i.ibb.co/VwVtyJp/Instagram-TV-Broadcast-Photo.png'
          alt='instagram_logo'
        />
        <input
          type='search'
          placeholder='Search'
          name='search'
          className='search'
          value={this.props.search}
          onChange={this.props.updateSearch}
        />
        <div className='activity-icons'>
          <img
            className='profile'
            src='https://i.ibb.co/BqY0r7s/profile.png'
            alt='profile'
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
