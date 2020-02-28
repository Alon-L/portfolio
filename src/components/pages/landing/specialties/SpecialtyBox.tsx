import path from 'path';
import React, { Component } from 'react';
import { Specialty } from './Specialties';
import LazyLoadingBackground from '../../../tools/lazyloading/LazyLoadingBackground';
import { Link } from 'react-router-dom';

type Props = Specialty;

class SpecialtyBox extends Component<Props> {
  public props: Props;
  public state = {};

  render() {
    const { title, dimensions: { rows, columns }, background, placeholder } = this.props;

    const boxStyle: React.CSSProperties = {
      gridRow: `span ${rows}`,
      gridColumn: `span ${columns}`,
    };

    const backgroundPath = path.join('../assets/specialties/home-backgrounds', background);
    const placeholderPath = path.join('../assets/specialties/home-backgrounds/placeholders', placeholder);

    return (
      <LazyLoadingBackground placeholder={placeholderPath} src={backgroundPath} className="specialty-box" style={boxStyle}>
        <Link to="projects" className="color-white d-block h-100">
          <div className="d-flex h-100 justify-content-center align-items-center">
            <h5 className="specialty-title font-weight-bold text-uppercase text-center">{title}</h5>
          </div>
        </Link>
      </LazyLoadingBackground>
    );
  }
}

export default SpecialtyBox;