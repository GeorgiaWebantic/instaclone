import React from 'react';
import axios from 'axios';
import UserPosts from '../components/usersPosts';
import '../styles/profile.scss';

class OtherProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: this.parseUserID(),
      userInfo: [],
      images: [],
    };
  }

  componentDidMount() {
    axios.get(`http://mcr-codes-image-sharing-api.herokuapp.com/users/${this.state.userID}`)
      .then((response) => {
        this.setState({
          userInfo: response.data,
          images: response.data.images,
        });
      });
  } 

  render() {
    return (
      <div className="profilePage">
        {console.log(this.state.userInfo)}
        <div className="profilePictureA" style={{ backgroundImage: `url(${this.state.userInfo.avatar})` }} />
        <h1 className="profileName">{this.state.userInfo.firstName} {this.state.userInfo.lastName}</h1>
        <h1>{this.state.userInfo.bio}</h1>
        <h1>Posts: {this.state.images.length}</h1>
        <div className="personalPost">
          {this.state.images.map((info) => {
            return (
              <UserPosts
                key={info._id}
                src={info.src}
                caption={info.caption}
              />
            );
          })}
        </div>
      </div>
    );
  }


  parseUserID() {
    const imagePath = this.props.location.pathname;
    const splitPath = imagePath.split('/');
    return splitPath[2];
  }
}


export default OtherProfile;
