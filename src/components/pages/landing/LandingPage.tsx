import React, { Component } from 'react';
import Home from './home/Home';
import Specialties from './specialties/Specialties';
import Contact from './contact/Contact';

class LandingPage extends Component {
  render() {
    return (
      <div className="page">
        <Home/>
        <Specialties/>
        <Contact/>
        <h1>TEST</h1>
      </div>
    );
  }
}

export default LandingPage;