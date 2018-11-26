import React from 'react';
import axios from 'axios';
import '../styles/profile.scss';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersPosts: null,
      firstName: '',
      lastName: '',
      avatar: '',
    };
  }

  componentDidMount() {
    axios.get(`https://mcr-codes-image-sharing-api.herokuapp.com/users/${this.props.user._id}`)
    .then((response) => {
      console.log(response);
      this.setState({
        usersPosts: response.data.images.length,
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        avatar: response.data.avatar,
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="profilePage">
        <h1 className="profileName">{this.state.firstName} {this.state.lastName}'s Profile</h1>
        <div className="profilePictureA" style={{ backgroundImage: `url(${this.state.avatar})` }} />
        <h4>{this.state.firstName} {this.state.lastName}</h4>
        <h5>Here there is meant to be a bio. Michael Will add it to the API</h5>
        <h5>Posts: {this.state.usersPosts}</h5>
        <Link to="/edit-profile" className="editProfileButton">Edit Profile</Link>
      </div>
    );
  }
}


export default Profile;
