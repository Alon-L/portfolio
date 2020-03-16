import React, { ChangeEvent, Component, FormEvent } from 'react';
import emailjs from 'emailjs-com';
import { Col, Form, FormGroup } from 'react-bootstrap';
import ContactFormInput from './ContactFormInput';
import ContactFormStatus from './ContactFormStatus';

export interface FormInput {
  labelText: string;
  name: string;
  placeholder: string;
  type: string;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export interface Status {
  status: number;
}

interface State extends Status {
  inputs: Record<string, string>;
}

class ContactForm extends Component<{}, State> {
  private formInputs: FormInput[] = [
    {
      labelText: 'Full Name',
      name: 'fullName',
      placeholder: 'John Doe',
      type: 'text',
    },
    {
      labelText: 'Email',
      name: 'email',
      placeholder: 'your@email.com',
      type: 'email',
    },
    {
      labelText: 'Message',
      name: 'message',
      placeholder: 'Your message...',
      type: 'textarea'
    }
  ];

  public state: State = {
    inputs: this.formInputs.reduce((inputs, formInput) => (
      { ...inputs, [formInput.name]: '' }
    ), {}),
    status: null,
  };

  private handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { target: { name, value } } = e;

    this.setState({
      inputs: {
        ...this.state.inputs,
        [name]: value
      }
    });
  };

  private handleFormSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    this.setState({
      status: 1,
    });

    const {
      EMAIL_JS_SERVICE_ID: serviceId,
      EMAIL_JS_TEMPLATE_ID: templateId,
      EMAIL_JS_USER_ID: userId
    } = process.env;

    let statusCode;
    try {
      const status = await emailjs.send(serviceId, templateId, this.state.inputs, userId);
      statusCode = status.status;
    } catch (err) {
      statusCode = 404;
    } finally {
      this.setState({
        status: statusCode
      });
    }
  };

  render() {
    const { state: { status }, handleFormSubmit, handleInputChange } = this;

    return (
      <Col md={6} className="contact-form">
        <Form onSubmit={handleFormSubmit}>
          <FormGroup>
            {
              this.formInputs.map(contactForm => (
                <ContactFormInput key={contactForm.labelText} {...contactForm} onChange={handleInputChange}/>
              ))
            }
            <ContactFormStatus status={status}/>
            <button type="submit" className="btn btn-primary btn-brand w-100 p-3">
              Submit Message
            </button>
          </FormGroup>
        </Form>
      </Col>
    );
  }
}

export default ContactForm;