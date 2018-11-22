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
      }],
      userID: null,
      user: TokenManager.isTokenValid() ? TokenManager.getTokenPayload() : null,
    };
  }


  componentDidMount() {
    axios.get('https://mcr-codes-image-sharing-api.herokuapp.com/images', this.state.posts)
      .then((response) => {
        console.log(response.data);
        this.setState({
          posts: response.data,
        });
      });
  }

  render() {
    console.log(this.state.user);
    return (
      <div className="home-container">
        {this.state.posts.map((post) => {
          console.log(post);
          return (
            <PostCard
              key={post._id}
              user={this.state.user}
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
