import React from 'react';
import './PostContainer.css';
import CommentSectionContainer from './CommentSectionContainer';
import './PostContainer.css';

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      likes: props.post.likes
    };
  }

  increaseLikes = () => {
    this.setState({
      likes: this.state.likes + 1
    });
  };

  render() {
    const { thumbnailUrl, username, comments, imageUrl } = this.props.post;
    return (
      <>
        <div className='post'>
          <div className='post-header'>
            <img src={thumbnailUrl} alt={username} className='profile-pic' />
            <h3 className='main-username'>{username}</h3>
          </div>
          <img src={imageUrl} alt={username} />
          <svg
            onClick={this.increaseLikes}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            class='feather feather-heart'
          >
            <path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' />
          </svg>
          <p className='likes'>{this.state.likes} likes</p>
          <CommentSectionContainer comments={comments} />
        </div>
      </>
    );
  }
}

export default PostContainer;
