import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ProjectsPage, { Project } from '../components/pages/projects/ProjectsPage';
import specialties from '../internals/config/specialties.json';

export interface ProjectsRoute {
  projects: Project[];
  path: string;
}

class ProjectsRoutes extends Component {
  projectsRoutes: ProjectsRoute[] = specialties;

  render() {
    return this.projectsRoutes.map(({ projects, path }) => (
      <Route key={path} path={path} component={() => (
        <ProjectsPage projects={projects} path={path}/>
      )}/>
    ));
  }
}

export default ProjectsRoutes;