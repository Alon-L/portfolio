import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface Props {
  background: string;
}

class ProjectBackgroundImage extends Component<Props> {
  props: Props;

  render() {
    const { background } = this.props;
    return (
      <Col className="col-auto project-background">
        <LazyLoadImage src={background}
          className="project-background-image"
          alt="Background Image"/>
      </Col>
    );
  }
}

export default ProjectBackgroundImage;