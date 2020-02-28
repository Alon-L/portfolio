import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

class ContactForm extends Component {
  render() {
    return (
      <Col md={5} className="contact-form">
        <form>
          <div className="form-group">
            <label>
              Full Name
              <input className="form-control" type="text" placeholder="John Doe"/>
            </label>
            <label>
              Email
              <input className="form-control" type="email" placeholder="your@email.com"/>
            </label>
            <label>
              Message
              <textarea className="form-control textarea-resize-disable" placeholder="Your message..."/>
            </label>
            <div className="btn btn-primary btn-brand w-100 p-3">
              Submit Message
            </div>
          </div>
        </form>
      </Col>
    );
  }
}

export default ContactForm;