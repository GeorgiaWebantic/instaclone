import React from 'react';
import '../styles/topnav.scss';

const TopNav = ({ user, isLoggedIn, onLogout }) => (
  <div className="topNav">
    <h1 className="logoTitle">Instaclone</h1>
    {
      isLoggedIn && (
      <div>
        <span>{user.firstName} {user.lastName}</span>
        <button onClick={onLogout}>Logout</button>
      </div>
      )}
  </div>

);
export default TopNav;
