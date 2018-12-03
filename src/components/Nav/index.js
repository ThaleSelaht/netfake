import React from 'react';
import './style.css';
import { Input } from 'antd';
const Search = Input.Search;

class Nav extends React.Component {
  render() {
    return(
      <div className="nav-principal">
        <img src="https://fontmeme.com/permalink/181201/23c21e73bc5321e9d4cd67900457f4b2.png" alt="Netflix Logo"/>
        <Search
      placeholder="Procure sua série aqui!"
      onSearch={value => console.log(value)}
      style={{ width: 200 }}
    />
      </div>
    );
  }
}

export default Nav;