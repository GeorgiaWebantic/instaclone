import React from 'react';
import '../styles/postcard.scss';

class UserPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const props = this.props;
    return (
      <div className="post-card">
        <div className="image" style={{ backgroundImage: `url(${props.src})` }} />
      </div>
    );
  }
}

export default UserPosts;
