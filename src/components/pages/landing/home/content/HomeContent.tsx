import React, { Component } from 'react';
import HomeContentSocials from './socials/HomeContentSocials';

class HomeContent extends Component {
  render() {
    return (
      <div className="home-content mt-n5">
        <h1 className="title">Hey, I&apos;m Alon.</h1>
        <hr className="home-content-hr color-brand w-75 ml-0"/>
        <div className="mb-5">
          <h3 className="font-weight-bold">Fullstack Development at its Peak</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem culpa delectus eum illo, iure
            laudantium libero mollitia nihil obcaecati odio porro possimus quae ratione recusandae sapiente
            similique temporibus vitae?</p>
        </div>
        <HomeContentSocials/>
      </div>
    );
  }
}

export default HomeContent;