import React, { Component } from 'react';
import { SectionHeader } from './ProjectSection';

type Props = SectionHeader;

class ProjectSectionHeader extends Component<Props> {
  public props: Props;

  render() {
    const { title, desc } = this.props;

    return (
      <div className="mb-5">
        <h1 className="title display-4">{title}</h1>
        <p>{desc}</p>
      </div>
    );
  }
}

export default ProjectSectionHeader;