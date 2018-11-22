import React from 'react';
import '../styles/topnav.scss';
import { Link } from 'react-router-dom';

const TopNav = ({ user, isLoggedIn, onLogout }) => (
  <div className="topNav">
    <h1 className="logoTitle">Instaclone</h1>
    {
      isLoggedIn && (
      <div className="logout">
        <img className="avatar" src={user.avatar} />
        <span>{user.firstName} {user.lastName}</span>
        <button onClick={onLogout}>Logout</button>
      </div>
      )}
    {
        !isLoggedIn && (
          <Link to="/login" className="login-button">Login</Link>
        )
      }
  </div>

);
export default TopNav;
