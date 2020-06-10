import React, { Component } from 'react';
import HomeContentSocial from './HomeContentSocial';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/pro-solid-svg-icons';

export interface Social {
  icon: IconDefinition;
  name: string;
  href: string;
}

class HomeContentSocials extends Component {
  socials: Social[] = [
    {
      icon: faTwitter,
      name: 'Twitter',
      href: 'https://twitter.com/AlonL_'
    },
    {
      icon: faGithub,
      name: 'GitHub',
      href: 'https://github.com/Alon-L'
    },
    {
      icon: faEnvelope,
      name: 'Email',
      href: 'mailto:inquiries@alonlivne.dev'
    }
  ];

  render() {
    return (
      <div className="d-flex">
        {this.socials.map(({ icon, name, href }) => (
          <HomeContentSocial key={href} icon={icon} name={name} href={href}/>
        ))}
      </div>
    );
  }
}

export default HomeContentSocials;
