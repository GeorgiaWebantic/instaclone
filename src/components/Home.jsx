import React from 'react';
import '../styles/home.scss';
import PostCard from '../components/PostCard';
import axios from 'axios';
import TokenManager from '../utils/token-manager';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [{
        user: '',
        src: '',
        comments: '',
        caption: '',
        _id: '',
      }],
      userID: null,
      user: TokenManager.isTokenValid() ? TokenManager.getTokenPayload() : null,
    };
  }


  componentDidMount() {
    axios.get('https://mcr-codes-image-sharing-api.herokuapp.com/images', this.state.posts)
      .then((response) => {
        this.setState({
          posts: response.data,
        });
      });
  }

  render() {
    return (
      <div className="home-container">
        {this.state.posts.map((post) => {
          return (
            <PostCard
              key={post._id}
              imageID={post._id}
              user={post.user}
              src={post.src}
              comments={post.comments}
              caption={post.caption}
              userID={this.state.userID}
            />
          );
        })}
      </div>
    );
  }
}

export default Home;
