import React, { Component } from 'react';
import SignTimes from '../../background/SIgnTimes';
import SignCircle from '../../background/SignCircle';

class SpecialtiesBackground extends Component {
  render() {
    return (
      <div>
        <SignTimes left={225} top={175}/>
        <SignCircle right={225} top={350}/>
        <SignCircle left={120} top={750}/>
        <SignTimes right={150} top={650}/>
      </div>
    );
  }
}

export default SpecialtiesBackground;