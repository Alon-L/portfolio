import React, { Component } from 'react';
import Blank from '../../../../assets/letters/blank.svg';
import Letter from '../letters/Letter';

class PreviewFeatured extends Component {
  render() {
    return (
      <div className="preview-featured">
        <div className="preview-right">
          <div className="preview-featured-fill bg-primary">
            <div className="preview-img">

            </div>
          </div>
        </div>
        <Letter LetterSVG={Blank}/>
      </div>
    );
  }
}

export default PreviewFeatured;