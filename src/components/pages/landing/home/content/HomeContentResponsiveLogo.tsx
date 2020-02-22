import React, { Component } from 'react';
import Combined from '../../../../../assets/letters/combined.svg';
import { Col } from 'react-bootstrap';
import FlexboxCompleteCenter from '../../../../tools/flexbox/FlexboxCompleteCenter';

class HomeContentResponsiveLogo extends Component {
  render() {
    return (
      <Col md={6} className="home-content-responsive-logo position-static">
        <FlexboxCompleteCenter>
          <Combined className="letter-combined mx-auto" width={350}/>
        </FlexboxCompleteCenter>
      </Col>
    );
  }
}

export default HomeContentResponsiveLogo;