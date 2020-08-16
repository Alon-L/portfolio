import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faCheckCircle, faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { Status } from './ContactForm';

type Props = Status;

class ContactFormStatus extends Component<Props> {
  public props: Props;
  private statusIcons: Record<number, JSX.Element> = {
    1: <FontAwesomeIcon icon={faCircleNotch} spin/>,
    200: <FontAwesomeIcon icon={faCheckCircle}/>,
  };
  private statusTexts: Record<number, string> = {
    1: 'Loading...',
    200: 'Email sent!',
  };

  render() {
    const { props: { status }, statusIcons } = this;

    const statusIcon = statusIcons[status] || (
      <FontAwesomeIcon icon={faTimesCircle}/>
    );

    const statusText = this.statusTexts[status] || 'Error! Try again!';

    return status ? (
      <div className="loader mb-2">
        {statusIcon}
        <div className="ml-2 d-inline-block">{statusText}</div>
      </div>
    ) : null;
  }
}

export default ContactFormStatus;
