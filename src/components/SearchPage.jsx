import React from 'react';
import '../styles/searchpage.scss';
import { Link } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSearch = () => {
    
  }

  render() {
    return (
      <div className="search-page">
        <div className="input">
          <label htmlFor="tags">
            <input
              type="text"
              name="tags"
              value={this.state.tags}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div className="input">
          <button onClick={this.handleSearch}>Search</button>
        </div>
      </div>
    );
  }
}

export default Search;
