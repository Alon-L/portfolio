import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import ProjectBackgroundImage from './ProjectBackgroundImage';
import ProjectBackgroundBlobs from './ProjectBackgroundBlobs';
import { Project } from './ProjectsPage';

interface Props extends Project {
  reverse: boolean;
}

class ProjectSection extends Component<Props> {
  public props: Props;

  render() {
    const { title, desc, toolsUsed, background, colors: { primary }, reverse } = this.props;
    return (
      <div className="h-100 position-relative d-flex align-items-center">
        <ProjectBackgroundBlobs color={primary}/>
        <Row className={`justify-content-center ${reverse ? 'flex-row-reverse' : 'flex-row'}`}>
          <ProjectBackgroundImage background={background}/>
          <Col lg={4} className="col-md-auto">
            <Col className="color-white">
              <div className="mb-5">
                <h1 className="font-weight-black display-4">{title}</h1>
                <p>{desc}</p>
              </div>
              <div>
                <h1 className="font-weight-black display-5">Tools Used</h1>
                <p>{toolsUsed}</p>
              </div>
            </Col>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ProjectSection;