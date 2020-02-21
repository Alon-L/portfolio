import React, { Component } from 'react';
import Times from '../../assets/signs/times.svg';
import Sign, { SignProps } from './Sign';

type Props = SignProps;

class SignTimes extends Component<Props> {
  public props: Props;

  render() {
    return (
      <Sign {...this.props} Image={Times}/>
    );
  }
}

export default SignTimes;