import React from 'react';
import '../styles/app.scss';
import { Switch, Route } from 'react-router-dom';
import Login from '../components/Login';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/login"
            component={Login}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
