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
      fields: response.data
    });
  });
}

  render() {
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
          <Link to={`/comments/${props.imageID}`}><i className="far fa-comment" /></Link>
        </div>
        <div className="likes">{this.state.fields.likes} Likes</div>
        <div className="caption-image">
          <div className="username">
            <span>{props.user.firstName}</span> <span>{props.user.lastName}</span>
          </div>
          <span className="text">{props.caption}</span>
        </div>
      </div>
    );
  }
};

export default PostCard;
