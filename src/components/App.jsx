import React from 'react';
import '../styles/app.scss';
import { Switch, Route } from 'react-router-dom';
import Login from '../components/Login';
import TopNav from '../components/TopNav';
import SignUp from '../components/SignUp';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }

  render() {
    return (
      <div>
        <TopNav />
        <Switch>
          <Route
            exact
            path="/login"
            component={Login}
          />
          <Route
            exact
            path="/sign-up"
            component={SignUp}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
