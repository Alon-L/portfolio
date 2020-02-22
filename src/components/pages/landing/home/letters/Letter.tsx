import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ADD_LETTER } from '../../../../../store/types/home/hero';
import { addLetter } from '../../../../../store/actions/home/hero';
import { Image } from '../../../../../types';

interface Props {
  LetterSVG: React.ComponentType<Image>;
  addLetter?: typeof addLetter;
}

class Letter extends Component<Props> {
  public props: Props;

  render() {
    const { LetterSVG } = this.props;
    return (
      <div className="letter">
        <LetterSVG width={350} ref={(e: SVGElement) => this.props.addLetter(e)}/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addLetter: (letter: Letter) => dispatch({ type: ADD_LETTER, payload: letter }),
});

export default connect<Props>(
  null,
  mapDispatchToProps
)(Letter);