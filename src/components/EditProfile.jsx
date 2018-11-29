import React from 'react';
import axios from 'axios';
import '../styles/editprofile.scss';
import Alert from '../components/Alert';
import TokenManager from '../utils/token-manager';

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [{
        firstName: '',
        lastName: '',
        avatar: '',
        alertMessage: '',
        isSuccess: false,
        isError: false,
        bio: '',
      },
      ],
      error: '',
      file: null,
    };
  }

  handleImageChange = (event) => {
    this.setState({
      file: event.target.files[0],
      avatar: URL.createObjectURL(event.target.files[0]),
    });
  };

  handleTextChange = (event) => {
    this.setState({
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleUpdateProfile = (event) => {
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
      formData.append('avatar', this.state.file);
      formData.append('firstName', this.state.user.firstName);
      formData.append('lastName', this.state.user.lastName);
      formData.append('bio', this.state.user.bio);

      axios.patch(
        'https://mcr-codes-image-sharing-api.herokuapp.com/me',
        formData,
        {
          headers: {
            Authorization: TokenManager.getToken(),
            'Content-Type': 'multipart/form-data',
          },
        }
      )
        .then((response) => {
          console.log(response);
          this.setState({
            user: {
              firstName: response.data.firstName,
              lastName: response.data.lastName,
              avatar: response.data.avatar,
              bio: response.data.bio,
            },
            isSuccess: true,
            alertMessage: 'Profile updated',
          });
        })
        .catch(() => {
          this.setState({
            isError: true,
            alertMessage: 'Profile not updated. Please try again later.',
          });
        });
    } else {
      this.setState({
        error: 'The form is invalid',
      });
    }
  };

  validate() {
    return this.state.user.firstName.length > 0;
  }


  render() {
    return (
      <div className="edit-profile">
        <h2>Edit Profile</h2>
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
        <form onSubmit={this.handleUpdateProfile}>
          <div>
            <label htmlFor="avatar" className="input-image">
              <i className="fas fa-cloud" /> Choose Image
            </label>
            <input name="avatar" type="file" onChange={this.handleImageChange} id="avatar" />
          </div>
          <img className="image-preview" src={this.state.avatar} />
          <div className="input">
            <label htmlFor="firstName">
              First Name:
              <input
                type="text"
                name="firstName"
                value={this.state.user.firstName}
                onChange={this.handleTextChange}
              />
            </label>
          </div>
          <div className="input">
            <label htmlFor="lastName">
              Last Name:
              <input
                type="text"
                name="lastName"
                value={this.state.user.lastName}
                onChange={this.handleTextChange}
              />
            </label>
          </div>
          <div className="input">
            <label>
              Bio:
              <textarea
                type="text"
                name="bio"
                value={this.state.user.bio}
                onChange={this.handleTextChange}
              />
            </label>
          </div>
          <button className="update-button" type="submit">Update Profile</button>
        </form>
      </div>
    );
  }
}


export default EditProfile;
