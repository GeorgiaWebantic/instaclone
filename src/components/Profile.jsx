import React from 'react';
import axios from 'axios';
import '../styles/profile.scss';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersPosts: null,
    };
  }

  componentDidMount() {
    axios.get(`http://mcr-codes-image-sharing-api.herokuapp.com/users/${this.props.user._id}`).then((response) => {
      console.log(response);
      this.setState({
        usersPosts: response.data.images.length,
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="profilePage">
        <h1 className="profileName">{this.props.user.firstName} {this.props.user.lastName}'s Profile</h1>
        <img className="profilePictureA" src={this.props.user.avatar} />
        <h4>{this.props.user.firstName} {this.props.user.lastName}</h4>
        <h5>Here there is meant to be a bio. Michael Will add it to the API</h5>
        <h5>Posts: {this.state.usersPosts}</h5>
        <button className="editProfileButton">Edit Profile</button>
      </div>
    );
  }
}


export default Profile;
