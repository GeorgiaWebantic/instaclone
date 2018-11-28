import React from 'react';
import '../styles/home.scss';
import PostCard from '../components/PostCard';
import axios from 'axios';
import TokenManager from '../utils/token-manager';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      fields: {
        user: '',
        src: '',
        tags: [],
        comments: [],
        caption: '',
        likes: 0,
        isLiked: true,
      },
      userID: null,
      user: TokenManager.isTokenValid() ? TokenManager.getTokenPayload() : null,
    };
  }


  componentDidMount() {
    axios.get('https://mcr-codes-image-sharing-api.herokuapp.com/images', this.state.fields)
      .then((response) => {
        this.setState({
          images: response.data
        });
      });
  }

  render() {
    return (
      <div className="home-container">
        {this.state.images.map(image => {
          console.log(image);
          return (
              <PostCard
                key={image._id}
                id={image._id}
                user={this.state.user}
                src={image.src}
                comments={image.comments}
                caption={image.caption}
                userID={this.state.userID}
                likes={image.likes}
                isLiked={image.isLiked}
              />
          );
        })}
      </div>
    );
  }
}

export default Home;
