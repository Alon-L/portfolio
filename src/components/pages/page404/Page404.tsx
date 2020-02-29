import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Page404Header from '../../../assets/page404-header.svg';

class Page404 extends Component {
  findReferrer(): string {
    const { referrer, location: { host, protocol } } = document;

    return referrer.length
      ? referrer
      : `${protocol}//${host}`
  }

  render() {
    return (
      <div className="page">
        <Container>
          <Row className="vh-100 justify-content-center align-items-center">
            <Col md={8}>
              <div className="text-center">
                <Page404Header/>
                <div className="mt-5 d-inline-block">
                  <h1>Oops! Page not found!</h1>
                  <a href={this.findReferrer()} className="btn btn-brand color-white mt-3">
                    Return Back
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Page404;