import React from 'react';
import axios from 'axios';
import CommentCard from '../components/CommentCard';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageID: this.parseImageID(),
      commentData: [{
        _id: '',
        content: '',
        author: [{
          avatar: '',
          firstName: '',
          lastName: '',
        }],
      }],
    };
  }

  componentDidMount() {
    axios.get(`https://mcr-codes-image-sharing-api.herokuapp.com/images/${this.state.imageID}`, this.state.commentData)
      .then((response) => {
        this.setState({
          commentData: response.data.comments,
        });
      });
  }

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
