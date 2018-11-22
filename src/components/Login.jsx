import React from 'react';
import '../styles/login.scss';
import axios from 'axios';
import TokenManager from '../utils/token-manager';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleLogin = () => {
    axios.post('https://mcr-codes-image-sharing-api.herokuapp.com/auth/login', {
      email: this.state.email,
      password: this.state.password,
    })
      .then((response) => {
        console.log(response);
        TokenManager.setToken(response.data.token);
        this.props.onLogin();
        this.props.history.push('/');
      })
      .catch((error) => {
        this.setState({ errorMessage: error.response.data.message });
      });
  };

  render() {
    return (
      <div className="login-container">
        <h1>Login</h1>
        <div className="input">
          <label htmlFor="email">
          Email:
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div className="input">
          <label htmlFor="email">
          Password:
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        {
          this.state.errorMessage &&
          <div><span>{this.state.errorMessage}</span></div>
        }
        <div className="input">
          <button onClick={this.handleLogin}>Login</button> or <Link to="/sign-up">Sign Up</Link>
        </div>
      </div>
    );
  }
}

export default Login;
