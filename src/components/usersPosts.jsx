import React from 'react';
import axios from 'axios';
import TokenManager from '../utils/token-manager';
import '../styles/postcard.scss';
import '../styles/userposts.scss'
import { Link } from 'react-router-dom';

class UserPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  handleDelete = (event) => {
    event.preventDefault();

    axios.delete(
      `http://mcr-codes-image-sharing-api.herokuapp.com/images/${this.props.id}`,
      {
        headers: {
          Authorization: TokenManager.getToken(),
        },
      }
    )
    .then((response) => {
      window.location.reload();
    })
  }

  render() {
    const props = this.props;
    return (
      <div className="post-card" style={{margin: "1em"}}>
        <div onClick={this.handleDelete} className="delete">
          <i className="fas fa-trash"></i>
        </div>
        <Link to={`/edit-post/${props.id}`}><i className="fas fa-ellipsis-h"></i></Link>
        <div className="image" style={{ backgroundImage: `url(${props.src})` }} />
        <div className="title">{props.caption}</div>
      </div>
    );
  }
}

export default UserPosts;
