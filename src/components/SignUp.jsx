import React from 'react';
import '../styles/signup.scss';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };
  }

  render() {
    return (
      <div className="signup-container">
        <h1>Sign Up</h1>
        <div className="input">
          <label htmlFor="firstName">
            First Name:
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div className="input">
          <label htmlFor="lastName">
            Last Name:
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
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
          <button onClick={this.handleLogin}>Sign Up</button>
        </div>
      </div>
    );
  }
}

export default SignUp;
