import React from 'react';
import './Portfolio.css';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';

export default function Portfolio() {
  
  return (
    <div className='portfolio-container'>
      {/* <img className='wave-bg' src={require('../../Assets/wave-haikei.png')}/> */}
      <Skills />
      <Projects />
      <Resume />
    </div>
  )
}