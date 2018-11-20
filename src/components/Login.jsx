import React from 'react';
import '../styles/login.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: '',
    };
  }

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
              type="text"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div className="input">
          <button onClick={this.handleLogin}>Login</button>
        </div>
      </div>
    );
  }
}

export default Login;
