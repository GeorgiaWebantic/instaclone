import React from 'react';
import '../styles/app.scss';
import { Switch, Route } from 'react-router-dom';
import Login from '../components/Login';
import TopNav from '../components/TopNav';
import SignUp from '../components/SignUp';
import TokenManager from '../utils/token-manager';
import Home from '../components/Home';
import AuthRoute from '../components/AuthRoute';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      user: TokenManager.isTokenValid() ? TokenManager.getTokenPayload() : null,
    };
  }

  handleLogin = () => {
    this.setState({ user: TokenManager.getTokenPayload() });
  };

  handleLogout = () => {
    TokenManager.removeToken();
    this.setState({ user: null });
  };

  isLoggedIn() {
    return Boolean(this.state.user) && TokenManager.isTokenValid();
  }

  render() {
    return (
      <React.Fragment>
        <TopNav
          isLoggedIn={this.isLoggedIn()}
          user={this.state.user}
          onLogout={this.handleLogout}
        />
        <Switch>
          <Route
            exact
            path="/"
            component={Home}
          />
          <Route
            exact
            path="/login"
            render={props => (
              <Login {...props} onLogin={this.handleLogin} />
            )}
          />
          <Route
            exact
            path="/sign-up"
            component={SignUp}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
