import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

class ContactContent extends Component {
  render() {
    return (
      <Col md={4} className="mr-md-5 text-md-left text-center">
        <h1 className="title">Contact</h1>
        <p>For any further questions or any business requests, feel free to contact me.<br/>All inquiries submitted here will go directly to my work Email, and I will try to respond to them as soon as possible!</p>
      </Col>
    );
  }
}

export default ContactContent;