import React, { Component } from 'react';
import Strip from '../../../../../assets/letters/strip.svg';
import Letter from '../letters/Letter';
import { Dispatch } from 'redux';
import { SET_COL } from '../../../../../store/types/home/hero';
import { connect } from 'react-redux';
import { HomeHeroCol } from '../../../../../store/types';
import { setPrimaryCol } from '../../../../../store/actions/home/hero';
import { TweenLite, Power1 } from 'gsap';

interface Props {
  setCol?: typeof setPrimaryCol;
}

class PreviewFill extends Component<Props> {
  public props: Props;
  private primaryCol: HTMLDivElement;

  componentDidMount(): void {
    this.primaryCol.style.width = '0px';

    TweenLite.to(this.primaryCol, 0.65, {
      width: '50vw',
      ease: Power1.easeInOut,
    });
  }

  render() {
    return (
      <div className="preview-fill" ref={e => {
        this.props.setCol(e);
        this.primaryCol = e
      }} style={{ width: '50vw' }}>
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
