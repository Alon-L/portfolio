import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Metropolis from '../../../../assets/metropolis.svg';
import ContactContent from './ContactContent';
import ContactForm from './ContactForm';
import ContactBackground from './ContactBackground';

class Contact extends Component {
  render() {
    return (
      <section className="section section-contact section-spacer-large">
        <Container fluid>
          <Container className="position-relative priority-low">
            <Row className="justify-content-between">
              <ContactContent/>
              <ContactForm/>
              <div className="contact-form-dots position-absolute"/>
            </Row>
          </Container>
          <ContactBackground/>
        </Container>
      </section>
    );
  }
}

export default Contact;