import React from 'react';
import axios from 'axios';
import '../styles/postcard.scss';
import { Link } from 'react-router-dom';
import TokenManager from '../utils/token-manager';

class PostCard extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      isLiked: false,
      likes: 0,
    }
  }

  handleLike = (event) => {
  event.preventDefault();

  this.setState({
      isLiked: this.state.likes >= 1,
      likes: this.state.likes,
  });

  const formData = new FormData();
  formData.append('likes', this.state.likes);
  formData.append('isLiked', this.state.isLiked);

  axios.patch(
    `https://mcr-codes-image-sharing-api.herokuapp.com/images/${this.props.id}/likes`,
    formData,
    {
      headers: {
        Authorization: TokenManager.getToken(),
      },
    }
  )
  .then((response) => {
    this.setState({
      isLiked: response.data.isLiked,
      likes: response.data.likes,
    })
  })
}

  render() {
    const props = this.props;
    return (
      <div className="post-card">
        <Link to="#" className="top-bar">
          <img src={props.user.avatar} />
          <div>
            <span>{props.user.firstName}</span> <span>{props.user.lastName}</span>
          </div>
        </Link>
        <div className="image" style={{ backgroundImage: `url(${props.src})` }} />
        <div className="bottom-bar">
          <div className="like">
            {(this.state.likes >= 1) ? <i onClick={this.handleLike} className="fas fa-heart" /> : <i onClick={this.handleLike} className="far fa-heart" />}
          </div>
          <i className="far fa-comment" />
        </div>
        <div className="likes">{this.state.likes} Likes</div>
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
