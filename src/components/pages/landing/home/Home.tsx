import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import PreviewFeatured from './previews/PreviewFeatured';
import PreviewFill from './previews/PreviewFill';
import { StoreState } from '../../../../store/state';
import { connect } from 'react-redux';
import { HomeHeroInitialState } from '../../../../store/reducers/home/hero';
import HomeContentTransformations from './content/HomeContentTransformations';
import HomeLettersMovement from '../../../../internals/HomeLettersMovement';

interface Props {
  homeHero?: HomeHeroInitialState;
}

class Home extends Component<Props> {
  public props: Props;

  componentDidUpdate(): void {
    const { homeHero: { letters, primaryCol } } = this.props;

    const homeLettersMovement = new HomeLettersMovement(letters, primaryCol);
    homeLettersMovement.startHandler();
  }

  render() {
    return (
      <section className="section section-home section-fullheight">
        <Container fluid className="vh-100">
          <PreviewFeatured/>
          <PreviewFill/>
          <HomeContentTransformations/>
        </Container>
      </section>
    );
  }
}

const mapStateToProps = (state: StoreState) => ({
  homeHero: state.homeHero
});

export default connect<Props>(
  mapStateToProps
)(Home);
