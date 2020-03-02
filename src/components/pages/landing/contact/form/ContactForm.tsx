import React, { Component } from 'react';
import { Col, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import ContactFormInput from './ContactFormInput';

export interface FormInput {
  labelText: string;
  placeholder: string;
  type?: string;
  textarea?: boolean;
}

class ContactForm extends Component {
  formInputs: FormInput[] = [
    {
      labelText: 'Full Name',
      type: 'text',
      placeholder: 'John Doe',
    },
    {
      labelText: 'Email',
      type: 'email',
      placeholder: 'your@email.com',
    },
    {
      labelText: 'Message',
      placeholder: 'Your message...',
      textarea: true,
    }
  ];

  render() {
    return (
      <Col md={5} className="contact-form">
        <Form>
          <FormGroup>
            {
              this.formInputs.map(({ labelText, placeholder, type, textarea } ) => (
                <ContactFormInput key={labelText} labelText={labelText} placeholder={placeholder} type={type} textarea={textarea}/>
              ))
            }
            <div className="btn btn-primary btn-brand w-100 p-3">
              Submit Message
            </div>
          </FormGroup>
        </Form>
      </Col>
    );
  }
}

export default ContactForm;