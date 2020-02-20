import React, { Component } from 'react';
import Combined from '../../../../assets/letters/combined.svg';
import { Col } from 'react-bootstrap';

class HomeContentResponsiveLogo extends Component {
  render() {
    return (
      <Col md={6} className="home-content-responsive-logo">
        <div className="letter-responsive position-absolute d-flex justify-content-center align-content-center">
          <Combined className="mx-auto" width={350}/>
        </div>
      </Col>
    );
  }
}

export default HomeContentResponsiveLogo;