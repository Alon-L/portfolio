import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import LazyLoad from 'react-lazyload';

interface Props {
  background: string;
}

class ProjectBackgroundImage extends Component<Props> {
  props: Props;

  render() {
    const { background } = this.props;
    return (
      <Col className="col-auto">
        <LazyLoad>
          <picture>
            <source type={'image/webp'} srcSet={`${background}.webp`}/>
            <source type={'image/png'} srcSet={`${background}.png2`}/>
            <img className="specialty-background-image" width={1000} src={`${background}.png2`} alt=""/>
          </picture>
        </LazyLoad>
      </Col>
    );
  }
}

export default ProjectBackgroundImage;