import React, { Component } from 'react';
import Logo from '../../../essentials/Logo';

class HomeContentLogo extends Component {
  render() {
    return (
      <div className="px-5 pt-5 pb-0 position-absolute home-content-logo">
        <Logo/>
      </div>
    );
  }
}

export default HomeContentLogo;