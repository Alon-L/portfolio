import React, { Component } from 'react';
import Routes from './containers/Routes';
import Navbar from './components/bars/navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div className="wrapper flex">
        <Navbar/>
        <Routes/>
      </div>
    );
  }
}

export default App;
