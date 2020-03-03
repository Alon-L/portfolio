import React, { Component } from 'react';
import { FormControl, FormLabel } from 'react-bootstrap';
import { FormInput } from './ContactForm';

type Props = FormInput;

class ContactFormInput extends Component<Props> {
  public props: Props;

  render() {
    const { labelText, name, placeholder, type, onChange } = this.props;

    return (
      <FormLabel>
        {labelText}
        { type === 'textarea' ? (
          <textarea required className="form-control textarea-resize-disable" name={name} placeholder={placeholder} onChange={onChange}/>
        ) : (
          <FormControl required type={type} name={name} placeholder={placeholder} onChange={onChange}/>
        ) }
      </FormLabel>
    );
  }
}

export default ContactFormInput;