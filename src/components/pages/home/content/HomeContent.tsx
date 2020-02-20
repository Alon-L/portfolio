import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import HomeContentLogo from './HomeContentLogo';
import HomeContentResponsiveLogo from './HomeContentResponsiveLogo';
import HomeContentSocials from './socials/HomeContentSocials';

class HomeContent extends Component {
  render() {
    return (
      <div>
        <HomeContentLogo/>
        <Row className="home-content-row mt-5 mt-md-0 vh-100 flex-md-row flex-wrap-reverse">
          <Col md={6}>
            <div className="home-content position-absolute">
              <h1 className="font-weight-black">Hey, I&apos;m Alon.</h1>
              <hr className="color-brand w-75 ml-0"/>
              <div className="mb-5">
                <h3 className="font-weight-bold">Fullstack Development at its Peak</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem culpa delectus eum illo, iure
                  laudantium libero mollitia nihil obcaecati odio porro possimus quae ratione recusandae sapiente
                  similique temporibus vitae?</p>
              </div>
              <HomeContentSocials/>
            </div>
          </Col>
          <HomeContentResponsiveLogo/>
        </Row>
      </div>
    );
  }
}

export default HomeContent;