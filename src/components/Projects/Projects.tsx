import './Projects.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import { useState } from 'react';

export default function Projects() {
  const [expand, setExpand] = useState(false);
  const handleExpand = () => {
    setExpand(prev => !prev);
  }
  const description = 'Lorem ipsum dolor sit amet,  Integer quis auctor elit sed vulputate mi sit amet mauris.'
  return (
    <div className='projects-container'>
      <h1 className='portfolio-header'>Projects</h1>
      <ProjectCard projectName='Outfit Forecast' description={description} imgName='weather-bg' />
      <ProjectCard projectName='Klime' description={description} imgName='klime-bg' />
      <ProjectCard projectName='Boardgame Gathering' description={description} imgName='game-bg' />
      <ProjectCard projectName='Rancid Tomatillos' description={description} imgName='movie-bg' />
      <div className='more-projects'>
        <div className='expand-bar'>
          <h4 style={{color: '#8D86BE'}}>{expand ? 'HIDE' : 'VIEW'} MORE</h4>
          <img onClick={handleExpand} className={`arrow-icon ${(expand && 'flipped')}`} src={require('../../Assets/down-arrow.png')} alt='arrow' />
        </div>
        <div className={`accordion ${!expand && 'hidden'}`}>
          <span>accordion</span>
        </div>
      </div>
    </div>
  );
}