import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/pro-solid-svg-icons';

interface Props {
  color: string;
}

class ProjectGoBack extends Component<Props> {
  public props: Props;

  render() {
    const { color } = this.props;

    return (
      <div className="go-back">
        <div className="position-relative vw-100">
          <Link to="/" className="color-black position-absolute arrow">
            <FontAwesomeIcon className="arrow-icon" color={color} icon={faArrowLeft} size={'2x'}/>
          </Link>
        </div>
      </div>
    );
  }
}

export default ProjectGoBack;