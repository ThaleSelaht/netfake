import React from 'react';
import './style.css';

class Header extends React.Component {
  render() {
    return(
      <h2 className="header-secondary">
        { this.props.value }
      </h2>
    );
  }
}

export default Header;