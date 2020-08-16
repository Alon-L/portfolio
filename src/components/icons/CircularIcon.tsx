import React, { Component } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  icon: IconDefinition;
}

class CircularIcon extends Component<Props> {
  public props: Props;

  render() {
    const { icon } = this.props;
    return (
      <div className="circular-icon">
        <FontAwesomeIcon icon={icon} size={'lg'}/>
      </div>
    );
  }
}

export default CircularIcon;
