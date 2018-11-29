import React from 'react';
import axios from 'axios';
import '../styles/postcard.scss';
import { Link } from 'react-router-dom';
import TokenManager from '../utils/token-manager';

class PostCard extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      fields: {
        likes: props.likes,
        isLiked: props.isLiked,
        comments: props.comments,
        tags: props.tags,
      },
    };
  }

  handleLike = (event) => {
  event.preventDefault();

  axios.patch(
    `http://mcr-codes-image-sharing-api.herokuapp.com/images/${this.props.id}/likes/`,
    this.state.fields,
    {
      headers: {
        Authorization: TokenManager.getToken(),
      },
    }
  )
  .then((response) => {
    console.log(response);
    this.setState({
      likes: response.data.likes,
      isLiked: response.data.isLiked,
      comments: response.data.comments,
      tags: response.data.tags,
      fields: response.data
    });
  });
}

  render() {
    console.log(this.props);
    const props = this.props;
    return (
      <div className="post-card">
        <Link to={`/profile/${props.user._id}`} className="top-bar">
          <img src={props.user.avatar} />
          <div>
            <span>{props.user.firstName}</span> <span>{props.user.lastName}</span>
          </div>
        </Link>
        <div className="image" style={{ backgroundImage: `url(${props.src})` }} />
        <div className="bottom-bar">
          <div className="like">
            {(this.state.fields.isLiked === true) ? <i onClick={this.handleLike} className="fas fa-heart" /> : <i onClick={this.handleLike} className="far fa-heart" />}
          </div>
          <div className="comment">
            {(this.state.fields.comments >= [0]) ? <Link to={`/comments/${props.imageID}`}><i className="fas fa-comment" /></Link> : <Link to={`/comments/${props.imageID}`}><i className="far fa-comment" /></Link>}
          </div>
        </div>
        <div className="likes">{this.state.fields.likes} Likes</div>
        <div className="comments-count">{this.state.fields.comments.length} Comments</div>
        <div className="caption-image">
          <div className="username">
            <span>{props.user.firstName}</span> <span>{props.user.lastName}</span>
          </div>
          <span className="text">{props.caption}</span>
        </div>
        <div className="post-tags">
          <Link to={`/search/${props.tags}`} className="text">{props.tags}</Link>
        </div>
      </div>
    );
  }
};

export default PostCard;
