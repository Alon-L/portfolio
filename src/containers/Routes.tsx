import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../components/pages/landing/LandingPage';
import ProjectsPage, { Project } from '../components/pages/projects/ProjectsPage';
import Page404 from '../components/pages/page404/Page404';

interface ProjectsRoute {
  projects: Project[];
  path: string;
}

class Routes extends Component {
  projectsRoutes: ProjectsRoute[] = [
    {
      projects: [
        {
          title: 'Plicked',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam aperiam atque consectetur delectus eum expedita, impedit officiis reiciendis repudiandae suscipit tempora tempore ullam unde veritatis voluptas voluptatum? Modi, obcaecati!',
          toolsUsed: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet aperiam aut dolore eligendi, impedit inventore ipsum iste nam pariatur perspiciatis praesentium quia voluptate. Maiores obcaecati quae quas quis vitae.',
          background: 'plicked',
          colors: {
            primary: '#35A591',
            secondary: '#5AD3BD'
          },
          buttons: {
            visit: 'https://plicked.com',
            source: 'https://github.com'
          }
        },
        {
          title: 'Plicked #2',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam aperiam atque consectetur delectus eum expedita, impedit officiis reiciendis repudiandae suscipit tempora tempore ullam unde veritatis voluptas voluptatum? Modi, obcaecati!',
          toolsUsed: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet aperiam aut dolore eligendi, impedit inventore ipsum iste nam pariatur perspiciatis praesentium quia voluptate. Maiores obcaecati quae quas quis vitae.',
          background: 'plicked',
          colors: {
            primary: '#8a39bf',
            secondary: '#b64afb'
          }
        }
      ],
      path: '/frontend'
    }
  ];

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
