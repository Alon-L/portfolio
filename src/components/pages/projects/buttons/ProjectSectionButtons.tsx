import React, { Component } from 'react';
import { Project, ProjectButtons } from './ProjectsPage';
import { Col, Row } from 'react-bootstrap';

interface Props {
  color: string;
  buttons: ProjectButtons;
}

interface State {
  visitButtonHover: boolean;
}

class ProjectSectionButtons extends Component<Props, State> {
  public props: Props;
  public state: State = {
    visitButtonHover: false
  };

  render() {
    const { props: { buttons, color }, state: { visitButtonHover } } = this;

    const visitButtonHoverStyle: React.CSSProperties = {
      color
    };

    return (
      buttons ? (
        <Row className="buttons mt-lg-5 mt-3">
          {
            buttons.visit ? (
              <Col md={6}>
                <a href={buttons.visit}
                  className="btn btn-outline-white"
                  onMouseEnter={() => this.setState({ visitButtonHover: true })}
                  onMouseLeave={() => this.setState({ visitButtonHover: false })}
                  style={visitButtonHover ? visitButtonHoverStyle : null}
                >
                  Visit Project
                </a>
              </Col>
            ) : null
          }
        </Row>
      ) : null
    );
  }
}

export default ProjectSectionButtons;