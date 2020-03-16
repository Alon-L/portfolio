import React, { Component } from 'react';
import Logo from '../../../../essentials/Logo';
import Combined from '../../../../../assets/letters/combined.svg';

class HomeContentLogo extends Component {
  render() {
    return (
      <div className="position-relative">
        <div className="pb-0 home-content-logo d-flex justify-content-between">
          <Logo/>
          <div className="home-content-logo-responsive">
            <Combined className="letter-combined mx-auto" width={350}/>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeContentLogo;