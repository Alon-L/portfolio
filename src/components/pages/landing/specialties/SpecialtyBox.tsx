import path from 'path';
import React, { Component } from 'react';
import { Specialty } from './Specialties';
import LazyLoadingBackground from '../../../tools/lazyloading/LazyLoadingBackground';
import { Link } from 'react-router-dom';
import { StoreState } from '../../../../store/state';
import { connect } from 'react-redux';

interface Props {
  specialty: Specialty;
  webpSupported?: boolean;
}

class SpecialtyBox extends Component<Props> {
  public props: Props;

  render() {
    const { specialty: { title, path: specialtyPath, dimensions: { rows, columns }, background, placeholder }, webpSupported } = this.props;

    const boxStyle: React.CSSProperties = {
      gridRow: `span ${rows}`,
      gridColumn: `span ${columns}`,
    };

    console.log(webpSupported);
    const backgroundPath = path.join('../assets/specialties/home-backgrounds', `${background}.${webpSupported ? 'webp' : 'jpg'}`);
    const placeholderPath = path.join('../assets/specialties/home-backgrounds/placeholders', `${placeholder}.${webpSupported ? 'webp' : 'jpg'}`);

    return (
      <LazyLoadingBackground placeholder={placeholderPath} src={backgroundPath} className="specialty-box"
        style={boxStyle}>
        <Link to={specialtyPath} className="color-white d-block h-100">
          <div className="d-flex h-100 justify-content-center align-items-center">
            <h5 className="specialty-title font-weight-bold text-uppercase text-center">{title}</h5>
          </div>
        </Link>
      </LazyLoadingBackground>
    );
  }
}

const mapStateToProps = (state: StoreState) => ({
  webpSupported: state.webpSupported,
});

export default connect(
  mapStateToProps,
)(SpecialtyBox);
