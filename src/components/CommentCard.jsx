import React from 'react';
import '../styles/commentCard.scss';

const CommentCard = (props) => (
  <div className="commentCard">
    <img className="commentImg" src={props.commentData.author.avatar} />
    <h1 className="commentItem">{props.commentData.author.firstName}</h1>
    <h1 className="commentItem">{props.commentData.author.lastName}</h1>
    <h1 className="commentItem2">{props.commentData.content}</h1>
  </div>
);

export default CommentCard;
