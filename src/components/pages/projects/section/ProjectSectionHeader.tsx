import React, { Component } from 'react';
import { SectionHeader } from './ProjectSection';

type Props = SectionHeader;

class ProjectSectionHeader extends Component<Props> {
  public props: Props;

  render() {
    const { title, desc } = this.props;

    return (
      <div className="mb-5">
        <h2 className="title display-4">{title}</h2>
        <p className="desc">{desc}</p>
      </div>
    );
  }
}

export default ProjectSectionHeader;
