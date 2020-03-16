import React, { Component } from 'react';
import { SectionTools } from './ProjectSection';

type Props = SectionTools;

class ProjectSectionTools extends Component<Props> {
  public props: Props;

  render() {
    const { toolsUsed } = this.props;

    return (
      <div className="mb-5">
        <h1 className="title">Tools Used</h1>
        <p className="desc">{toolsUsed}</p>
      </div>
    );
  }
}

export default ProjectSectionTools;