import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { ReactFullPageTypes } from '../../../types';
import path from 'path';
import ProjectGoBack from './ProjectGoBack';
import ProjectSection from './ProjectSection';
import { ProjectsRoute } from '../../../containers/Routes';

export interface ProjectButtons {
  visit?: string;
  source?: string;
}

export interface Project {
  title: string;
  desc: string;
  toolsUsed: string;
  background: string;
  colors: {
    primary: string;
    secondary: string;
  },
  buttons?: ProjectButtons;
}

type Props = ProjectsRoute;

interface State {
  color: string;
}

class ProjectsPage extends Component<Props, State> {
  public props: Props;

  private colors: string[] = this.props.projects.map(({ colors: { primary } }) => primary);

  public state: State = {
    color: this.colors[0],
  };

  render() {
    const { props: { projects, path: backgroundFolder }, state: { color } } = this;

    return (
      <div>
        <ProjectGoBack color={color}/>
        <ReactFullpage
          licenseKey={process.env.FULL_JS_LICENSE_KEY}
          scrollingSpeed={1000}
          navigation={true}
          navigationPosition={'right'}
          onLeave={(origin: ReactFullPageTypes.Origin, destination: ReactFullPageTypes.Destination) => {
            this.setState({
              color: destination.item.getAttribute('data-background-color'),
            });
          }}
          render={() => {
            return (
              <ReactFullpage.Wrapper>
                {
                  projects.map((
                    {
                      title,
                      desc,
                      toolsUsed,
                      background,
                      colors: { primary, secondary },
                      buttons
                    }, i
                  ) => {
                    const backgroundPath = path.join('../assets/specialties/pages/', backgroundFolder, background);
                    const sectionStyle: React.CSSProperties = {
                      backgroundImage: `linear-gradient(to bottom right, ${primary}, ${secondary})`
                    };
                    return (
                      <div key={title} data-background-color={primary} className="section overflow-hidden"
                        style={sectionStyle}>
                        <ProjectSection title={title} desc={desc} toolsUsed={toolsUsed} background={backgroundPath}
                          colors={{ primary, secondary }} buttons={buttons} reverse={i % 2 !== 0}/>
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