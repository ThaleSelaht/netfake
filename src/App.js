import React from 'react';
import 'antd/dist/antd.css';
import Nav from './components/Nav/';
import Slider from './components/Slider/';
import Header from './components/Header/';

class App extends React.Component {
  state = {
    current: 'mail',
  }
  render() {
    return (      
      <div>
        <Nav />
        <Slider />
        <Header value="Up Coming" />
        <Header value="Popular" />
        <Header value="Top Rated" />
        <Header value="Now Playing" />
      </div>
    );
  }
}

export default App;
