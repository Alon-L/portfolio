import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import Logo from '../../essentials/Logo';

class HomeContent extends Component {
  render() {
    return (
      <Row className="vh-100">
        <Col md={5}>
          <div className="p-5">
            <Logo/>
          </div>
        </Col>
      </Row>
    );
  }
}

export default HomeContent;