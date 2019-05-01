import React, { Component } from 'react';
import './Login.css';
import styled from 'styled-components';

const Button = styled.button`
  color: white;
  background-color: #3897f0;
  border: none;
  width: 255px;
  padding: 10px;
  border-radius: 5px;
  margin-left: 8px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    transition: 0.3s ease-in-out;
    filter: brightness(90%);
  }
`;

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
          <Button onClick={this.handleLoginSubmit}>Log In</Button>
        </form>
      </div>
    );
  }
}

export default Login;
