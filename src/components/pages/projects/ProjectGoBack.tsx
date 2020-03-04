import React, { Component, Fragment } from 'react';
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
      <div className="go-back priority-high">
        <div className="position-relative vw-100">
          <Link aria-label="Go back" to="/" className="color-black d-inline-block position-absolute arrow">
            <FontAwesomeIcon className="arrow-icon" color={color} icon={faArrowLeft} size={'2x'}/>
          </Link>
        </div>
      </div>
    );
  }
}

export default ProjectGoBack;