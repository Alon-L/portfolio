import path from 'path';
import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import ProjectGoBack from './ProjectGoBack';
import ProjectSection from './ProjectSection';

export interface Project {
  title: string;
  desc: string;
  toolsUsed: string;
  background: string;
  colors: {
    primary: string;
    secondary: string;
  }
}

interface State {
  color: string;
}

class ProjectsPage extends Component<{}, State> {
  private projects: Project[] = [
    {
      title: 'Plicked',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam aperiam atque consectetur delectus eum expedita, impedit officiis reiciendis repudiandae suscipit tempora tempore ullam unde veritatis voluptas voluptatum? Modi, obcaecati!',
      toolsUsed: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet aperiam aut dolore eligendi, impedit inventore ipsum iste nam pariatur perspiciatis praesentium quia voluptate. Maiores obcaecati quae quas quis vitae.',
      background: 'plicked.png',
      colors: {
        primary: '#35A591',
        secondary: '#5AD3BD'
      }
    },
    {
      title: 'Plicked #2',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam aperiam atque consectetur delectus eum expedita, impedit officiis reiciendis repudiandae suscipit tempora tempore ullam unde veritatis voluptas voluptatum? Modi, obcaecati!',
      toolsUsed: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet aperiam aut dolore eligendi, impedit inventore ipsum iste nam pariatur perspiciatis praesentium quia voluptate. Maiores obcaecati quae quas quis vitae.',
      background: 'plicked.png',
      colors: {
        primary: '#8a39bf',
        secondary: '#aa46eb'
      }
    }
  ];

  private colors: string[] = this.projects.map(({ colors: { primary } }) => primary);

  public state: State = {
    color: this.colors[0],
  };

  render() {
    const { color } = this.state;

    return (
      <div>
        <ProjectGoBack color={color}/>
        <ReactFullpage
          licenseKey={process.env.FULL_JS_LICENSE_KEY}
          scrollingSpeed={1000}
          navigation={true}
          navigationPosition={'right'}
          onLeave={(origin: Record<string, any>, destination: Record<string, any>) => {
            this.setState({
              color: destination.item.getAttribute('data-background-color'),
            });
          }}
          render={() => {
            return (
              <ReactFullpage.Wrapper>
                {
                  this.projects.map((
                    {
                      title,
                      desc,
                      toolsUsed,
                      background,
                      colors: { primary, secondary }
                    }, i
                  ) => {
                    const backgroundPath = path.join('../assets/specialties/pages/frontend/', background);
                    const sectionStyle: React.CSSProperties = {
                      backgroundImage: `linear-gradient(to bottom right, ${primary}, ${secondary})`
                    };
                    return (
                      <div key={title} data-background-color={primary} className="section overflow-hidden"
                        style={sectionStyle}>
                        <ProjectSection title={title} desc={desc} toolsUsed={toolsUsed} background={backgroundPath}
                          colors={{ primary, secondary }} reverse={i % 2 !== 0}/>
                      </div>
                    );
                  })
                }
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    );
  }
}

export default ProjectsPage;