import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import LazyLoad from 'react-lazyload';

interface Props {
  background: string;
}

class ProjectBackgroundImage extends Component<Props> {
  props: Props;

  render() {
    const { background } = this.props;
    return (
      <Col className="col-auto">
        <LazyLoad>
          <img className="specialty-background-image" src={background} width={1000} alt="Background Image"/>
        </LazyLoad>
      </Col>
    );
  }
}

export default ProjectBackgroundImage;