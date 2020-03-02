import React, { Component } from 'react';
import { FormControl, FormLabel } from 'react-bootstrap';
import { FormInput } from './ContactForm';

type Props = FormInput;

class ContactFormInput extends Component<Props> {
  public props: Props;

  render() {
    const { labelText, placeholder, type, textarea } = this.props;

    return (
      <FormLabel>
        {labelText}
        { textarea ? (
          <textarea className="form-control textarea-resize-disable" placeholder={placeholder}/>
        ) : (
          <FormControl type={type} placeholder={placeholder}/>
        ) }
      </FormLabel>
    );
  }
}

export default ContactFormInput;