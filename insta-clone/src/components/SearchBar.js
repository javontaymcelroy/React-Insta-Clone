import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
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
          onChange={e => {
            this.props.updateSearch(e);
          }}
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
