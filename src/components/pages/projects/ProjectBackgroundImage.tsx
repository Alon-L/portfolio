import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import LazyLoad from 'react-lazy-load';

interface Props {
  background: string;
}

class ProjectBackgroundImage extends Component<Props> {
  props: Props;

  render() {
    const { background } = this.props;
    console.log(background);
    return (
      <Col className="col-auto project-background">
        <LazyLoad>
          <img className="project-background-image" src={background} alt="Background Image"/>
        </LazyLoad>
      </Col>
    );
  }
}

export default ProjectBackgroundImage;