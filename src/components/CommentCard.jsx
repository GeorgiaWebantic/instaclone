import React from 'react';
import '../styles/commentCard.scss';
import axios from 'axios';
import TokenManager from '../utils/token-manager';

class CommentCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  handleOnClick = () => {
    axios.delete(
      `http://mcr-codes-image-sharing-api.herokuapp.com/images/${this.props.imageID}/comments/${this.props.commentData._id}`,
      {
        headers: {
          Authorization: TokenManager.getToken(),
        },
      }
    ).then((response) => {
      console.log(response);
      window.location.reload();
    }).catch((error) => {
      console.log(error);
    });
  };

  showDelete() {
    if (TokenManager.getTokenPayload()._id === this.props.commentData.author._id) {
      return true;
    }
  }

  render() {
    return (
      <div className="commentCard">
        <span className="imageandname">
          <div className="commentImg" style={{ backgroundImage: `url(${this.props.commentData.author.avatar})` }} />
          <span>
            <h1 className="commentItem">{this.props.commentData.author.firstName}</h1>
            <h1 className="commentItem">{this.props.commentData.author.lastName}</h1>
          </span>
        </span>
        <h1 className="commentItem2">{this.props.commentData.content}</h1>
        {
          this.showDelete() &&
          (
          <div className="deleteComment" onClick={this.handleOnClick}>
            <i className="fas fa-trash" />
          </div>
          )
        }
      </div>
    );
  }
}
export default CommentCard;
