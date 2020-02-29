import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../components/pages/landing/LandingPage';
import ProjectsPage from '../components/pages/projects/ProjectsPage';

class Routes extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact={true} path="/" component={LandingPage}/>

          <Route path="/projects" component={ProjectsPage}/>

          {/* TODO: Make a 404 fallback page */}
          <Route path="/*" component={LandingPage}/>a
        </Switch>
      </main>
    );
  }
}

export default Routes;
