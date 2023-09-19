import React from 'react';
import './Portfolio.css';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';

export default function Portfolio() {
  
  return (
    <div className='portfolio-container'>
      <Skills />
      <Projects />
      <Resume />
    </div>
  )
}