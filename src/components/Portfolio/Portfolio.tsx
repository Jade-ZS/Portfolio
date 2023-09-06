import React from 'react';
import './Portfolio.css';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Experience from '../Experience/Experience';

export default function Portfolio() {
  console.log('portfolio')
  return (
    <div className='portfolio-container'>
      <Skills />
      <Projects />
      <Experience />
    </div>
  )
}