import React, { Component } from 'react';
import Home from './home/Home';
import Specialties from './specialties/Specialties';

class LandingPage extends Component {
  render() {
    return (
      <div className="page">
        <Home/>
        <Specialties/>
      </div>
    );
  }
}

export default LandingPage;