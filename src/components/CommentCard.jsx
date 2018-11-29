import React from 'react';
import '../styles/commentCard.scss';
import moment from 'moment';

const CommentCard = (props) => (
  <div className="commentCard">
    <span className="imageandname">
      <div className="commentImg" style={{ backgroundImage: `url(${props.commentData.author.avatar})` }} />
      <span>
        <h1 className="commentItem">{props.commentData.author.firstName}</h1>
        <h1 className="commentItem">{props.commentData.author.lastName}</h1>
      </span>
    </span>
    <h1 className="commentItem2">{props.commentData.content}</h1>
  </div>
);

export default CommentCard;
