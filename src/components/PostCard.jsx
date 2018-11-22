import React from 'react';
import '../styles/postcard.scss';
import { Link } from 'react-router-dom';

const PostCard = (props) => (
  <div className="post-card">
    <Link to="#" className="top-bar">
      <img src={props.user.avatar} />
      <div>
        <span>{props.user.firstName}</span> <span>{props.user.lastName}</span>
      </div>
    </Link>
    <div className="image" style={{ backgroundImage: `url(${props.src})` }} />
    <div className="bottom-bar">
      <i className="far fa-heart" />
      <i className="far fa-comment" />
    </div>
    <div className="caption-image">
      <div className="username">
        <span>{props.user.firstName}</span> <span>{props.user.lastName}</span>
      </div>
      <span className="text">{props.caption}</span>
    </div>
    {/* <div className="comments">
      <span className="name">{props.user}</span>
      <span className="text">{props.comments}</span>
    </div> */}
  </div>
);

export default PostCard;
