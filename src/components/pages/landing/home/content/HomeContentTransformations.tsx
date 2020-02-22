import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import HomeContentLogo from './HomeContentLogo';
import HomeContentResponsiveLogo from './HomeContentResponsiveLogo';
import CompleteCenter from '../../../../tools/flexbox/CompleteCenter';
import HomeContent from './HomeContent';

class HomeContentTransformations extends Component {
  render() {
    return (
      <div className="mx-sm-5 mx-2 pt-5 h-100">
        <div className="position-relative h-100">
          <HomeContentLogo/>
          <Row className="h-100 mr-0">
            <Col md={6} className="home-content-col">
              <CompleteCenter>
                <HomeContent/>
              </CompleteCenter>
            </Col>
            <HomeContentResponsiveLogo/>
          </Row>
        </div>
      </div>
    );
  }
}

export default HomeContentTransformations;