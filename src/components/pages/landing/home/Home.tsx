import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import PreviewFeatured from './previews/PreviewFeatured';
import PreviewFill from './previews/PreviewFill';
import { StoreState } from '../../../../store/state';
import { connect } from 'react-redux';
import { HomeHeroInitialState } from '../../../../store/reducers/home/hero';
import HomeContentTransformations from './content/HomeContentTransformations';
import HomeLettersMovement from '../../../../internals/HomeLettersMovement';
import Strip from '../../../../assets/letters/strip.svg';

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
      <Container fluid className="section section-fullheight">
        <PreviewFeatured/>
        <PreviewFill/>
        <HomeContentTransformations/>
      </Container>
    );
  }
}

const mapStateToProps = (state: StoreState) => ({
  homeHero: state.homeHero
});

export default connect<Props>(
  mapStateToProps
)(Home);
