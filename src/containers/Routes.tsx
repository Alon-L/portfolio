import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../components/pages/landing/LandingPage';
import ProjectsPage from '../components/pages/projects/ProjectsPage';

class Routes extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact={true} path="/">
            <LandingPage/>
          </Route>

          <Route path="/projects">
            <ProjectsPage/>
          </Route>
        </Switch>
      </main>
    );
  }
}

export default Routes;
