import React, { Component } from 'react';
import Combined from '../../../../assets/letters/combined.svg';
import { Col } from 'react-bootstrap';
import CompleteCenter from '../../../tools/flexbox/CompleteCenter';

class HomeContentResponsiveLogo extends Component {
  render() {
    return (
      <Col md={6} className="home-content-responsive-logo position-static">
        <CompleteCenter>
          <Combined className="letter-combined mx-auto" width={350}/>
        </CompleteCenter>
      </Col>
    );
  }
}

export default HomeContentResponsiveLogo;