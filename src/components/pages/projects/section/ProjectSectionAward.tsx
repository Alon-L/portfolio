import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/pro-solid-svg-icons';

interface Props {
  color: string;
}

class ProjectSectionAward extends Component<Props> {
  public props: Props;

  render() {
    const { color } = this.props;

    return (
      <div className="position-absolute background-white py-3 text-center project-background-award">
        <FontAwesomeIcon style={{ color }} size="2x" icon={faTrophy}/>
      </div>
    );
  }
}

export default ProjectSectionAward;