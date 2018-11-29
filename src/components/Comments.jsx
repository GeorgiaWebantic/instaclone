import React from 'react';
import axios from 'axios';
import CommentCard from '../components/CommentCard';
import '../styles/comments.scss';
import TokenManager from '../utils/token-manager';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageID: this.parseImageID(),
      commentData: [],
      commentToAdd: '',
    };
  }

  componentDidMount() {
    axios.get(`https://mcr-codes-image-sharing-api.herokuapp.com/images/${this.state.imageID}`)
      .then((response) => {
        this.setState({
          commentData: response.data.comments,
        });
      });
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  addComment = (event) => {
    console.log(this.state.commentToAdd);
    event.preventDefault();
    axios.post(
      `https://mcr-codes-image-sharing-api.herokuapp.com/images/${this.state.imageID}/comments`, {

        content:this.state.commentToAdd,
      },
      {
        headers: {
          Authorization: TokenManager.getToken(),
        },
      }
    ).then((response) => {
      console.log(response.data);
    });
  };

  render() {
    return (
      <div className="commentsSection">
        {this.state.commentData.map((data) => {
          return (
            <CommentCard
              key={data._id}
              commentData={data}
            />
          );
        })}
        <span>
          <label className="label">
            <span className="marginBottom">Add a comment...</span>
            <textarea
              value={this.state.commentToAdd}
              type="text"
              onChange={this.handleInputChange}
              name="commentToAdd"
              className="addtextarea"
            />
          </label>
          <button onClick={this.addComment} className="addComment" >Add Comment!</button>
          </span>
      </div>
    );
  }

  parseImageID() {
    const imagePath = this.props.location.pathname;
    const splitPath = imagePath.split('/');
    return splitPath[2];
  }
}
export default Comments;
