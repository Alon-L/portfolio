import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

interface Props {
  show: boolean;
  color: string;
  url: string;
  text: string;
  hoverStyles?: React.CSSProperties;
}

interface State {
  buttonHover: boolean;
}

class ProjectSectionButton extends Component<Props, State> {
  public props: Props;
  public state: State = {
    buttonHover: false,
  };

  render() {
    const { props: { show, color, url, text, hoverStyles }, state: { buttonHover } } = this;

    return show ? (
      <Col md={5}>
        <a href={url}
          className={`btn w-100 mb-3 btn-${color}`}
          onMouseEnter={() => this.setState({ buttonHover: true })}
          onMouseLeave={() => this.setState({ buttonHover: false })}
          style={buttonHover ? hoverStyles : null}
          target={'_blank'}
          rel={'noopener noreferrer'}
        >{text}</a>
      </Col>
    ) : null
  }
}

export default ProjectSectionButton;