import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import PreviewFeatured from './previews/PreviewFeatured';
import PreviewFill from './previews/PreviewFill';
import { StoreState } from '../../../../store/state';
import { connect } from 'react-redux';
import { HomeHeroInitialState } from '../../../../store/reducers/home/hero';
import HomeContentTransformations from './content/HomeContentTransformations';
import HomeLettersMovement from '../../../../internals/scripts/HomeLettersMovement';
import { Dispatch } from 'redux';
import { RESET_LETTERS } from '../../../../store/types/home/hero';
import { resetLetters } from '../../../../store/actions/home/hero';

interface Props {
  homeHero?: HomeHeroInitialState;
  resetLetters?: typeof resetLetters;
}

class Home extends Component<Props> {
  public props: Props;

  componentDidUpdate(): void {
    const { homeHero: { letters, primaryCol } } = this.props;

    const homeLettersMovement = new HomeLettersMovement(letters, primaryCol);
    homeLettersMovement.addHandler();
  }

  componentWillUnmount(): void {
    this.props.resetLetters();
  }

  render() {
    return (
      <section className="section section-home section-fullheight">
        <Container fluid className="position-relative h-100">
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

const mapDispatchToProps = (dispatch: Dispatch) => ({
  resetLetters: () => dispatch({ type: RESET_LETTERS }),
});

export default connect<Props>(
  mapStateToProps,
  mapDispatchToProps
)(Home);
