import React from 'react';
import axios from 'axios';
import '../styles/editprofile.scss';
import Alert from '../components/Alert';
import TokenManager from '../utils/token-manager';

class EditPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: [{
        caption: '',
        tags: [],
        alertMessage: '',
        isSuccess: false,
        isError: false,
      },
      ],
      error: '',
      imageID: this.parseImageID(),
    };
  }

  handleTextChange = (event) => {
    this.setState({
      image: {
        ...this.state.image,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleUpdatePost = (event) => {
    event.preventDefault();

    this.setState({
      alertMessage: '',
      isSuccess: false,
      isError: false,
    });

    if (this.validate()) {
      this.setState({
        error: '',
      });

      axios.patch(
        `http://mcr-codes-image-sharing-api.herokuapp.com/images/${this.state.imageID}`,
        {
          'caption': this.state.image.caption,
          'tags': this.state.image.tags,
        },
        {
          headers: {
            Authorization: TokenManager.getToken(),
          },
        }
      )
        .then((response) => {
          this.setState({
            image: {
              caption: response.data.caption,
              tags: response.data.tags,
            },
            isSuccess: true,
            alertMessage: 'Post updated',
          });
        })
        .catch(() => {
          this.setState({
            isError: true,
            alertMessage: 'Post not updated. Please try again later.',
          });
        });
    } else {
      this.setState({
        error: 'The form is invalid',
      });
    }
  };

  validate() {
    return this.state.image.caption.length > 0;
  }


  render() {
    return (
      <div className="edit-profile">
        <h2>Edit Post</h2>
        <div className="alert alert.success">
          {
              this.state.isSuccess &&
                <Alert message={this.state.alertMessage} success />
            }
          {
              this.state.isError &&
                <Alert message={this.state.alertMessage} />
            }
        </div>
        {this.state.error &&
          <h1 className="error-message">{this.state.error}</h1>
          }
        <form onSubmit={this.handleUpdatePost}>
          <div className="input">
            <label htmlFor="caption">
              Caption:
              <input
                type="text"
                name="caption"
                value={this.state.image.caption}
                onChange={this.handleTextChange}
              />
            </label>
          </div>
          <div className="input">
            <label htmlFor="tags">
              Tags:
              <textarea
                type="text"
                name="tags"
                value={this.state.image.tags}
                onChange={this.handleTextChange}
              />
            </label>
          </div>
          <button className="update-button" type="submit">Update Post</button>
        </form>
      </div>
    );
  }
  parseImageID() {
    const imagePath = this.props.location.pathname;
    const splitPath = imagePath.split('/');
    return splitPath[2];
  }
}


export default EditPost;
