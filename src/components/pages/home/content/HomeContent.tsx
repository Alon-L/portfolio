import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import HomeContentLogo from './HomeContentLogo';
import HomeContentResponsiveLogo from './HomeContentResponsiveLogo';
import HomeContentSocials from './socials/HomeContentSocials';
import CompleteCenter from '../../../tools/flexbox/CompleteCenter';

class HomeContent extends Component {
  render() {
    return (
      <div className="mx-sm-5 mx-2 mt-5 h-100 position-relative">
        <HomeContentLogo/>
        <Row className="h-100 mr-0">
          <Col md={6} className="home-content-col">
            <CompleteCenter>
              <div className="home-content mt-n5">
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
            </CompleteCenter>
          </Col>
          <HomeContentResponsiveLogo/>
        </Row>
      </div>
    );
  }
}

export default HomeContent;