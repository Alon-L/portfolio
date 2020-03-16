import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import HomeContentLogo from './HomeContentLogo';
import FlexboxCompleteCenter from '../../../../tools/flexbox/FlexboxCompleteCenter';
import HomeContent from './HomeContent';

class HomeContentTransformations extends Component {
  render() {
    return (
      <div className="mx-sm-5 mx-2 pt-5 h-100">
        <div className="position-relative h-100">
          <HomeContentLogo/>
          <Row className="home-content-row h-100 mr-sm-0">
            <Col lg={6}>
              <FlexboxCompleteCenter>
                <HomeContent/>
              </FlexboxCompleteCenter>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default HomeContentTransformations;