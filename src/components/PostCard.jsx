import React from 'react';
import '../styles/postcard.scss';
import { Link } from 'react-router-dom';

const PostCard = () => (
  <div className="post-card">
    <Link to="#" className="top-bar">
      <img src="https://placebear.com/200/200" />
      <span>User Name</span>
    </Link>
    <div className="image">
      <img src="https://placekitten.com/400/400" />
    </div>
    <div className="bottom-bar">
      <i className="far fa-heart" />
      <i className="far fa-comment" />
    </div>
  </div>
);

export default PostCard;
