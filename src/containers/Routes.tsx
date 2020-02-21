import React, { Component } from 'react';
import Home from '../components/sections/home/Home';
import ReactFullpage from '@fullpage/react-fullpage';
import Specialties from '../components/sections/specialties/Specialties';

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
