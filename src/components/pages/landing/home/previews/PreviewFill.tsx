import React, { Component } from 'react';
import Strip from '../../../../../assets/letters/strip.svg';
import Letter from '../letters/Letter';
import { Dispatch } from 'redux';
import { SET_COL } from '../../../../../store/types/home/hero';
import { connect } from 'react-redux';
import { HomeHeroCol } from '../../../../../store/types';
import { setPrimaryCol } from '../../../../../store/actions/home/hero';
import { TweenLite } from "gsap";

interface Props {
  setCol?: typeof setPrimaryCol;
}

class PreviewFill extends Component<Props> {
  public props: Props;
  private primaryCol: HTMLDivElement;

  componentDidMount(): void {
    TweenLite.to(this.primaryCol, 0.65, {
      width: '50%',
    });
  }

  render() {
    return (
      <div className="preview-fill" ref={e => {this.props.setCol(e); this.primaryCol = e}} style={{ width: 0 }}>
        <Letter LetterSVG={Strip}/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCol: (col: HomeHeroCol) => dispatch({ type: SET_COL, payload: col }),
});

export default connect<Props>(
  null,
  mapDispatchToProps
)(PreviewFill);
