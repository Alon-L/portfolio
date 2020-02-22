import React, { Component } from 'react';
import Logo from '../../../../essentials/Logo';

class HomeContentLogo extends Component {
  render() {
    return (
      <div className="position-relative">
        <div className="pb-0 position-absolute home-content-logo">
          <Logo/>
        </div>
      </div>
    );
  }
}

export default HomeContentLogo;