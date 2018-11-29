import React from 'react';
import '../styles/app.scss';
import { Switch, Route } from 'react-router-dom';
import Login from '../components/Login';
import TopNav from '../components/TopNav';
import SignUp from '../components/SignUp';
import TokenManager from '../utils/token-manager';
import Home from '../components/Home';
import AddPost from '../components/AddPost';
import BottomNav from '../components/BottomNav';
import Profile from '../components/Profile';
import EditProfile from '../components/EditProfile';
import Comments from '../components/Comments';
import OtherProfile from '../components/OtherProfile';
import Search from '../components/SearchPage';


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
            path="/home"
            component={Home}
            user={this.state.user}
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
          <Route
            exact
            path="/search"
            component={Search}
          />
          <Route
            exact
            path="/add-post"
            component={AddPost}
          />
          <Route
            exact
            path="/profile-page"
            render={props => (
              <Profile {...props} user={this.state.user} isLoggedIn={this.isLoggedIn()} />
            )}
          />
          <Route
            exact
            path="/edit-profile"
            render={props => (
              <EditProfile {...props} user={this.state.user} isLoggedIn={this.isLoggedIn()} />
            )}
          />
          <Route
            path="/comments"
            render={props => (
              <Comments {...props} user={this.state.user} isLoggedIn={this.isLoggedIn()} />
            )}
            />
          <Route 
            path="/profile"
            render={props => (
              <OtherProfile {...props} user={this.state.user} isLoggedIn={this.isLoggedIn()} />
            )}
          />
            />
          />
        </Switch>
        <BottomNav
          isLoggedIn={this.isLoggedIn()}
        />
      </React.Fragment>
    );
  }
}

export default App;
