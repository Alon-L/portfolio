import React, { Component } from 'react';
import { ProjectButtons } from '../ProjectsPage';
import { Row } from 'react-bootstrap';
import ProjectSectionButton from './ProjectSectionButton';

interface Props {
  color: string;
  buttons: ProjectButtons;
}

class ProjectSectionButtons extends Component<Props> {
  public props: Props;

  render() {
    const { buttons, color } = this.props;
    
    const buttonHoverStyle: React.CSSProperties = {
      color
    };

    return buttons ? (
      <Row className="buttons mt-3 mt-lg-5">
        <ProjectSectionButton show={!!buttons.visit} color="white" text="Visit Project" url={buttons.visit}
          hoverStyles={buttonHoverStyle}/>
        <ProjectSectionButton show={!!buttons.source} color="black" text="View Source" url={buttons.source}
          hoverStyles={buttonHoverStyle}/>
      </Row>
    ) : null;
  }
}

export default ProjectSectionButtons;