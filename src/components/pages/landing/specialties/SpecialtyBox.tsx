import React, { Component } from 'react';
import { Specialty } from './Specialties';

type Props = Specialty;

class SpecialtyBox extends Component<Props> {
  public props: Props;

  render() {
    const { title, dimensions: { rows, columns }, background } = this.props;

    const boxStyle: React.CSSProperties = {
      gridRow: `span ${rows}`,
      gridColumn: `span ${columns}`,
      backgroundImage: `url(${background})`,
    };

    return (
      <div className="specialty-box" style={boxStyle}>
        <a href="#" className="color-white d-block h-100">
          <div className="d-flex h-100 justify-content-center align-items-center">
            <h5 className="title font-weight-bold text-uppercase text-center">{title}</h5>
          </div>
        </a>
      </div>
    );
  }
}

export default SpecialtyBox;