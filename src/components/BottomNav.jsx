import React from 'react';
import '../styles/bottomnav.scss';
import { Link } from 'react-router-dom';

class BottomNav extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    if (this.props.isLoggedIn === true) {
      return (
        <div className="BottomNav">
          <Link className="bottomNavLink" to="/"><i className="fas fa-home fa-2x" /></Link>
          <Link className="bottomNavLink" to="/search"><i className="fas fa-search fa-2x" /></Link>
          <Link className="bottomNavLink" to="/add-post"><i className="far fa-plus-square fa-2x" /></Link>
          <Link className="bottomNavLink" to="/liked"><i className="far fa-heart fa-2x" /></Link>
          <Link className="bottomNavLink" to="profile-page"><i className="far fa-user fa-2x" /></Link>
        </div>
      );
    }else {
      return (null);
    }
  }
}

export default BottomNav;
