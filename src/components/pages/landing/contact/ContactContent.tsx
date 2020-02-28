import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

class ContactContent extends Component {
  render() {
    return (
      <Col md={5} className="mr-md-5 text-md-left text-center">
        <h1 className="title">Contact</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet beatae commodi dolore ea eaque
          error et excepturi incidunt ipsam, iure laborum nesciunt omnis pariatur praesentium quo, sint
          suscipit.
          Voluptate.</p>
      </Col>
    );
  }
}

export default ContactContent;