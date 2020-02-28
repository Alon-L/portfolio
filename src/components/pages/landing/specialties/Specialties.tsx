import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import SpecialtyBox from './SpecialtyBox';
import SpecialtiesBackground from './SpecialtiesBackground';

export interface Specialty {
  title: string;
  dimensions: {
    rows: number;
    columns: number;
  },
  background: string;
  placeholder: string;
}

class Specialties extends Component {
  specialties: Specialty[] = [
    {
      title: 'Frontend',
      dimensions: {
        rows: 2,
        columns: 4,
      },
      background: 'frontend.jpg',
      placeholder: 'frontend-placeholder.jpg',
    },
    {
      title: 'Backend',
      dimensions: {
        rows: 3,
        columns: 2,
      },
      background: 'backend.jpg',
      placeholder: 'backend-placeholder.jpg',
    },
    {
      title: 'Desktop Software',
      dimensions: {
        rows: 2,
        columns: 2,
      },
      background: 'software.jpg',
      placeholder: 'software-placeholder.jpg',
    },
    {
      title: 'Browser Extensions',
      dimensions: {
        rows: 2,
        columns: 2,
      },
      background: 'browser.jpg',
      placeholder: 'browser-placeholder.jpg',
    },
    {
      title: 'Graphic Developments',
      dimensions: {
        rows: 3,
        columns: 2,
      },
      background: 'graphics.jpg',
      placeholder: 'graphics-placeholder.jpg',
    },
    {
      title: 'Discord Bots',
      dimensions: {
        rows: 2,
        columns: 4,
      },
      background: 'discord-bots.png',
      placeholder: 'discord-bots-placeholder.png',
    }
  ];

  render() {
    return (
      <section className="section section-specialties">
        <div className="position-relative">
          <SpecialtiesBackground/>
          <Container className="section mb-5 position-relative">
            <div className="section-spacer">
              <h1 className="title text-center mb-5">Specialties</h1>
              <div className="specialties vh-100">
                {this.specialties.map(({ title, dimensions, background, placeholder }) => (
                  <SpecialtyBox key={title} title={title} dimensions={dimensions} background={background}
                                placeholder={placeholder}/>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </section>
    );
  }
}

export default Specialties;