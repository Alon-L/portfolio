import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import SpecialtyBox from './SpecialtyBox';
import SpecialtiesBackground from './SpecialtiesBackground';
import specialties from '../../../../internals/config/specialties.json';

export interface Specialty {
  title: string;
  path: string;
  dimensions: {
    rows: number;
    columns: number;
  },
  background: string;
  placeholder: string;
}

class Specialties extends Component {
  specialties: Specialty[] = specialties;

  render() {
    return (
      <section className="section section-specialties">
        <div className="position-relative">
          <SpecialtiesBackground/>
          <Container className="section mb-5 position-relative">
            <div className="section-spacer">
              <p className="h1 title text-center mb-5">Specialties</p>
              <div className="specialties vh-100">
                {this.specialties.map(({ title, path, dimensions, background, placeholder }) => (
                  <SpecialtyBox key={title} title={title} path={path} dimensions={dimensions} 
                    background={background} placeholder={placeholder}/>
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