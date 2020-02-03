const React = require('react');

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="search-text">search ni hao {window && window.__initial_data}</div>;
  }
}

module.exports = <Search />;
