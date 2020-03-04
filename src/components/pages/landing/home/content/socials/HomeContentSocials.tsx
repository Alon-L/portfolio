import React, { Component } from 'react';
import HomeContentSocial from './HomeContentSocial';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/pro-solid-svg-icons';

export interface Social {
  icon: IconDefinition;
  href: string;
}

class HomeContentSocials extends Component {
  socials: Social[] = [
    {
      icon: faTwitter,
      href: 'https://twitter.com/daycolor_'
    },
    {
      icon: faGithub,
      href: 'https://github.com/DayColor'
    },
    {
      icon: faEnvelope,
      href: 'mailto:inquiries@alonlivne.dev'
    }
  ];

  render() {
    return (
      <div className="d-flex">
        {this.socials.map(({ icon, href }) => (
          <HomeContentSocial key={href} icon={icon} href={href}/>
        ))}
      </div>
    );
  }
}

export default HomeContentSocials;