import React, { Component } from 'react';
import Blank from '../../../../assets/letters/blank.svg';
import Letter from '../letters/Letter';
import Laptop from '../../../../assets/laptop.svg';

class PreviewFeatured extends Component {
  render() {
    return (
      <div className="preview-featured overflow-hidden">
        <div className="preview-right">
          <div className="preview-featured-fill">
            <div className="preview-img">
              <Laptop width={650} className="preview-featured-image"/>
            </div>
          </div>
        </div>
        <Letter LetterSVG={Blank}/>
      </div>
    );
  }
}

export default PreviewFeatured;