import React from 'react';
import axios from 'axios';
import '../styles/profile.scss';
import { Link } from 'react-router-dom';
import UserPosts from '../components/usersPosts';


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersPosts: null,
      firstName: '',
      lastName: '',
      avatar: '',
      images: [],
      _id: '',
    };
  }

  componentDidMount() {
    axios.get(`https://mcr-codes-image-sharing-api.herokuapp.com/users/${this.props.user._id}`)
      .then((response) => {
        this.setState({
          usersPosts: response.data.images.length,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          avatar: response.data.avatar,
          images: response.data.images,
          bio: response.data.bio,
        });
        console.log(this.state.images)
      }).catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="profilePage">
        <div className="profilePictureA" style={{ backgroundImage: `url(${this.state.avatar})` }} />
        <h4>{this.state.firstName} {this.state.lastName}</h4>
        <div className="bio">{this.state.bio}</div>
        <h5>Posts: {this.state.usersPosts}</h5>
        <Link to="/edit-profile" className="editProfileButton">Edit Profile</Link>
        <div className="posts-container">
            <div className="personalPost">
              {this.state.images.map((post) => {
                return (
                  <UserPosts
                    key={post._id}
                    src={post.src}
                    id={post._id}
                  />
                );
              })}
            </div>
          </div>
      </div>
    );
  }
}


export default Profile;
