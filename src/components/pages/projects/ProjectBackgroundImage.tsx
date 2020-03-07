import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ProjectSectionAward from './section/ProjectSectionAward';

interface Props {
  background: string;
  color: string;
  award?: boolean;
}

class ProjectBackgroundImage extends Component<Props> {
  props: Props;

  render() {
    const { background, color, award } = this.props;
    return (
      <Col className="col-auto project-background">
        {award ? <ProjectSectionAward color={color}/> : null}
        <LazyLoadImage src={background}
          className="project-background-image"
          alt="Background Image"/>
      </Col>
    );
  }
}

export default ProjectBackgroundImage;