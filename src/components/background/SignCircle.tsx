import React, { Component } from 'react';
import Circle from '../../assets/signs/circle.svg';
import Sign, { SignProps } from './Sign';

type Props = SignProps;

class SignCircle extends Component<Props> {
  public props: Props;

  render() {
    return (
      <Sign {...this.props} Image={Circle}/>
    );
  }
}

export default SignCircle;