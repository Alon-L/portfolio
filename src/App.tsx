import React, { Component } from 'react';
import Routes from './containers/Routes';
import Navbar from './components/bars/navbar/Navbar';
import DetectWebPSupport from './components/tools/DetectWebPSupport';

class App extends Component {
  render() {
    return (
      <div className="wrapper flex">
        <Navbar/>
        <Routes/>
        <DetectWebPSupport/>
      </div>
    );
  }
}

export default App;
