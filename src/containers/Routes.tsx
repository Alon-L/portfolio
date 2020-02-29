import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../components/pages/landing/LandingPage';
import ProjectsPage from '../components/pages/projects/ProjectsPage';
import Page404 from '../components/pages/page404/Page404';

class Routes extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact={true} path="/" component={LandingPage}/>

          <Route path="/projects" component={ProjectsPage}/>

          <Route path="/*" component={Page404}/>
        </Switch>
      </main>
    );
  }
}

export default Routes;
