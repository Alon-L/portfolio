import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import ProjectBackgroundImage from '../ProjectBackgroundImage';
import ProjectBackgroundBlobs from '../ProjectBackgroundBlobs';
import ProjectSectionButtons from '../buttons/ProjectSectionButtons';
import { Project } from '../ProjectsPage';
import ProjectSectionHeader from './ProjectSectionHeader';
import ProjectSectionTools from './ProjectSectionTools';

export interface SectionHeader {
  title: string;
  desc: string;
}

export interface SectionTools {
  toolsUsed: string;
}

interface Props extends Project {
  reverse: boolean;
}

class ProjectSection extends Component<Props> {
  public props: Props;

  render() {
    const {
      title, desc, toolsUsed, background, colors: { primary },
      buttons, reverse
    } = this.props;

    return (
      <section className="project">
        <div className="h-100 d-flex align-items-center">
          <ProjectBackgroundBlobs color={primary}/>
          <Row className={`justify-content-center ${reverse ? 'flex-row-reverse' : 'flex-row'}`}>
            <ProjectBackgroundImage background={background}/>
            <Col lg={4} className="col-md-auto">
              <Col className="color-white">
                <ProjectSectionHeader title={title} desc={desc}/>
                <ProjectSectionTools toolsUsed={toolsUsed}/>
                <ProjectSectionButtons color={primary} buttons={buttons}/>
              </Col>
            </Col>
          </Row>
        </div>
      </section>
    );
  }
}

export default ProjectSection;