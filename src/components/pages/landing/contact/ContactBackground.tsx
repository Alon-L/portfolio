import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import Metropolis from '../../../../assets/metropolis.svg';

class ContactBackground extends Component {
  render() {
    return (
      <div className="mt-n7">
        <Row className="justify-content-center">
          <Col md={10}>
            <Metropolis aria-label="Metropolis" style={{ opacity: .5 }}/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ContactBackground;