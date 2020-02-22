import React, { Component } from 'react';
import { Social } from './HomeContentSocials';
import CircularIcon from '../../../../../icons/CircularIcon';

type Props = Social;

class HomeContentSocial extends Component<Props> {
  public props: Props;

  render() {
    const { icon, href } = this.props;
    return (
      <a href={href} target={'_blank'} rel={'noopener noreferrer'} className="mr-3">
        <CircularIcon icon={icon}/>
      </a>
    );
  }
}

export default HomeContentSocial;