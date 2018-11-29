import React from 'react';
import '../styles/addpost.scss';
import axios from 'axios';
import Alert from '../components/Alert';
import TokenManager from '../utils/token-manager';

class AddPost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: [{
        src: '',
        caption: '',
        alertMessage: '',
        isSuccess: false,
        isError: false,
      },
      ],
      error: '',
      file: null,
    };
  }

  imageChange = (event) => {
    this.setState({
      file: event.target.files[0],
      src: URL.createObjectURL(event.target.files[0]),
    });
  };

    textChange = (event) => {
      this.setState({
        fields: {
          ...this.state.fields,
          [event.target.name]: event.target.value,
        },
      });
    };

  handleAddPost = (event) => {
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

      const formData = new FormData();
      formData.append('image', this.state.file);
      formData.append('caption', this.state.fields.caption);

      axios.post(
        'https://mcr-codes-image-sharing-api.herokuapp.com/images',
        formData,
        {
          headers: {
            Authorization: TokenManager.getToken(),
            'Content-Type': 'multipart/form-data',
          },
        }
      )
        .then(() => this.setState({
          isSuccess: true,
          alertMessage: 'Post added.',
        }))
        .catch(() => {
          this.setState({
            alertMessage: 'Post not added. Please try again later.',
            isError: true,
          });
        });
    } else {
      this.setState({
        error: 'The form is invalid',
      });
    }
  };


  validate() {
    return this.state.fields.caption.length > 0;
  }

  render() {
    return (
      <div className="add-post">
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
        <form onSubmit={this.handleAddPost}>
          <div>
            <label htmlFor="src" className="input-image">
              <i className="fas fa-cloud" /> Choose Image
            </label>
            <input name="src" type="file" onChange={this.imageChange} id="src" />
          </div>
          <img className="image-preview" src={this.state.src} />
          <textarea
            name="caption"
            type="text"
            className="caption"
            value={this.state.fields.caption}
            onChange={this.textChange}
          />
          <button className="add-button" type="submit">Post</button>
        </form>
      </div>
    );
  }
}

export default AddPost;
