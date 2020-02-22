import React, { Component } from 'react';
import Home from '../components/pages/landing/home/Home';
import ReactFullpage from '@fullpage/react-fullpage';
import Specialties from '../components/pages/landing/specialties/Specialties';

class Routes extends Component {
  render() {
    return (
      <main>
        <Home/>
        <Specialties/>
      </main>
    );
  }
}

export default Routes;
