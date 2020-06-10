import React, { Component } from 'react';
import HomeContentSocials from './socials/HomeContentSocials';

class HomeContent extends Component {
  render() {
    return (
      <div className="home-content mb-8">
        <h1 className="title">Hey, I&apos;m Alon.</h1>
        <hr className="home-content-hr color-brand w-75 ml-0"/>
        <div className="mb-5">
          <h3 className="font-weight-bold">Fullstack Development at its Peak</h3>
          <p>Hello! My name is Alon, and I am a Computer Science student.
            I specialize in Fullstack development and Web development in particular.
            I mainly use ReactJS along with TypeScript and a few more powerful tools for frontend, and ExpressJS or Go for my backend apps. I have a strong passion for learning new technologies and deepen into new systems and tools.</p>
        </div>
        <HomeContentSocials/>
      </div>
    );
  }
}

export default HomeContent;
