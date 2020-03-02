import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../components/pages/landing/LandingPage';
import ProjectsPage, { Project } from '../components/pages/projects/ProjectsPage';
import Page404 from '../components/pages/page404/Page404';
import specialties from '../internals/config/specialties.json';

interface ProjectsRoute {
  projects: Project[];
  path: string;
}

class Routes extends Component {
  projectsRoutes: ProjectsRoute[] = specialties;

  render() {
    return (
      <main>
        <Switch>
          <Route exact={true} path="/" component={LandingPage}/>

          {this.projectsRoutes.map(({ projects, path }) => (
            <Route key={path} path={path} component={() => (
              <ProjectsPage projects={projects}/>
            )}/>
          ))}

          <Route path="/*" component={Page404}/>
        </Switch>
      </main>
    );
  }
}

export default Routes;
