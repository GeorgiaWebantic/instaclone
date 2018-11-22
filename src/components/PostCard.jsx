import React from 'react';
import '../styles/postcard.scss';
import { Link } from 'react-router-dom';

const PostCard = (user) => (
  <div className="post-card">
    <Link to="#" className="top-bar">
      <img src={user.avatar} />
      <span>{user.firstName}</span>
    </Link>
    <div className="image" style={{ backgroundImage: `url(${user.src})` }}>
      {/* <img src={props.src} /> */}
    </div>
    <div className="bottom-bar">
      <i className="far fa-heart" />
      <i className="far fa-comment" />
    </div>
    <div className="caption-image">
      <span className="name">{user.user}</span>
      <span className="text">{user.caption}</span>
    </div>
    {/* <div className="comments">
      <span className="name">{props.user}</span>
      <span className="text">{props.comments}</span>
    </div> */}
  </div>
);

export default PostCard;
