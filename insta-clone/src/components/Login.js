import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLoginSubmit = e => {
    const user = this.state.username;
    localStorage.setItem('user', user);
    window.location.reload();
  };

  render() {
    return (
      <div className='login-form'>
        <img
          className='ig-logo'
          src='https://i.ibb.co/VwVtyJp/Instagram-TV-Broadcast-Photo.png'
          alt='instagram_logo'
        />
        <form className='top-form'>
          <input
            type='text'
            placeholder='Phone number, username, or email'
            name='username'
            value={this.state.username}
            onChange={this.handleInputChange}
          />
        </form>
        <form className='btn-form'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <button className='login-btn' onClick={this.handleLoginSubmit}>
            Log In
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
