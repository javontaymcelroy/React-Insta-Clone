import React from 'react';

const Likes = props => {
  return [
    <div
      className='like-section'
      key='likes-icons-container'
      onClick={props.incrementLike}
    >
      <div className='like-section-wrapper'>
        <svg
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
      </div>
      <div className='like-section-wrapper'>
        <i className='far fa-comment' />
      </div>
    </div>,
    <div className='like-section' key='likes-container'>
      <div className='like-section-wrapper'>{props.likes}</div>
    </div>
  ];
};

export default Likes;
