import React from 'react';
import axios from 'axios';
import TokenManager from '../utils/token-manager';
import '../styles/postcard.scss';
import '../styles/userposts.scss'
import { Link } from 'react-router-dom';

class OtherUsersPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const props = this.props;
    return (
      <div className="post-card" style={{margin: "1em"}}>
        <div className="image" style={{ backgroundImage: `url(${props.src})` }} />
        <div className="title">{props.caption}</div>
      </div>
    );
  }
}

export default OtherUsersPosts;
