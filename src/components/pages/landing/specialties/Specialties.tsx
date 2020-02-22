import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Image } from '../../../../types';
import SpecialtyBox from './SpecialtyBox';
import frontend from '../../../../assets/specialties/frontend.jpg';
import software from '../../../../assets/specialties/software.jpg';
import backend from '../../../../assets/specialties/backend.jpg';
import browser from '../../../../assets/specialties/browser.jpg';
import graphics from '../../../../assets/specialties/graphics.jpg';
import discordBots from '../../../../assets/specialties/discord-bots.png';
import SpecialtiesBackground from './SpecialtiesBackground';

export interface Specialty {
  title: string;
  dimensions: {
    rows: number;
    columns: number;
  },
  background: Image;
}

class Specialties extends Component {
  specialties: Specialty[] = [
    {
      title: 'Frontend',
      dimensions: {
        rows: 2,
        columns: 4,
      },
      background: frontend,
    },
    {
      title: 'Backend',
      dimensions: {
        rows: 3,
        columns: 2,
      },
      background: backend,
    },
    {
      title: 'Desktop Software',
      dimensions: {
        rows: 2,
        columns: 2,
      },
      background: software,
    },
    {
      title: 'Browser Extensions',
      dimensions: {
        rows: 2,
        columns: 2,
      },
      background: browser,
    },
    {
      title: 'Graphics Development',
      dimensions: {
        rows: 3,
        columns: 2,
      },
      background: graphics,
    },
    {
      title: 'Discord Bots',
      dimensions: {
        rows: 2,
        columns: 4,
      },
      background: discordBots,
    }
  ];

  render() {
    return (
      <div className="specialties-section position-relative">
        <SpecialtiesBackground/>
        <Container className="section mb-5 position-relative">
          <div className="section-spacer">
            <h1 className="text-center mb-5 font-weight-bold">Specialties</h1>
            <div className="specialties vh-100">
              {this.specialties.map(({ title, dimensions, background }) => (
                <SpecialtyBox key={title} title={title} dimensions={dimensions} background={background}/>
              ))}
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Specialties;