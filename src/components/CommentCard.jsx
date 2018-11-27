import React from 'react';

const CommentCard = (props) => (
  <div>
    <img src={props.commentData.author.avatar} />
    <h1>{props.commentData.author.firstName}</h1>
    <h1>{props.commentData.author.lastName}</h1>
    <h1>{props.commentData.content}</h1>
  </div>
);

export default CommentCard;
