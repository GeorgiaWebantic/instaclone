import React from 'react';
import '../styles/bottomnav.scss';
import { NavLink } from 'react-router-dom';

class BottomNav extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    if (this.props.isLoggedIn === true) {
      return (
        <div className="BottomNav">
          <NavLink className="bottomNavLink" activeStyle={{color: "#488b8f"}} to="/home"><i className="fas fa-home fa-2x" /></NavLink>
          <NavLink className="bottomNavLink" activeStyle={{color: "#488b8f"}} to="/add-post"><i className="far fa-plus-square fa-2x" /></NavLink>
          <NavLink className="bottomNavLink" activeStyle={{color: "#488b8f"}} to="/profile-page"><i className="far fa-user fa-2x" /></NavLink>
        </div>
      );
    }else {
      return (null);
    }
  }
}

export default BottomNav;
