import React from 'react';
import '../styles/topnav.scss';
import { Link } from 'react-router-dom';

const TopNav = ({ user, isLoggedIn, onLogout }) => (
  <div className="topNav">
    <Link to='/home' className="logo">
      <h1 className="logoTitle">Instaclone</h1>
    </Link>
    {
      isLoggedIn && (
      <div className="logout">
        <img className="avatar" src={user.avatar} />
        <span>{user.firstName} {user.lastName}</span>
        <button className="logout-button" onClick={onLogout}>Logout</button>
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
