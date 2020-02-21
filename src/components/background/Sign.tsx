import React, { Component } from 'react';
import { Image } from '../../types';
import Circle from '../../assets/signs/circle.svg';

export interface SignProps {
  left?: number;
  top?: number;
  right?: number;
  bottom?: number;
}

interface Props extends SignProps {
  Image: Image;
}

class Sign extends Component<Props> {
  public props: Props;

  render() {
    const { left, top, right, bottom, Image } = this.props;

    const signStyles: React.CSSProperties = {
      left,
      top,
      right,
      bottom,
      transform: 'translate(-50%, -50%)'
    };

    return (
      <Image width={25} className="position-absolute" style={signStyles}/>
    );
  }
}

export default Sign;