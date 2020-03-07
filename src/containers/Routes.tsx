import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../components/pages/landing/LandingPage';
import Page404 from '../components/pages/page404/Page404';
import ProjectsRoutes from './ProjectsRoutes';

class Routes extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact={true} path="/" component={LandingPage}/>

          <ProjectsRoutes/>

          <Route path="/*" component={Page404}/>
        </Switch>
      </main>
    );
  }
}

export default Routes;
