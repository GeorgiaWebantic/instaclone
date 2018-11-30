import React from 'react';
import axios from 'axios';
import OtherUsersPosts from '../components/otherUsersPosts';
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
        <h4>{this.state.userInfo.firstName} {this.state.userInfo.lastName}</h4>
        <div className="bio">{this.state.userInfo.bio}</div>
        <h5>Posts: {this.state.images.length}</h5>
        <div className="posts-container">
          <div className="personalPost">
            {this.state.images.map((info) => {
              return (
                <OtherUsersPosts
                  key={info._id}
                  src={info.src}
                  caption={info.caption}
                />
              );
            })}
          </div>
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
