import './Projects.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import MiniCard from '../MiniCard/MiniCard';
import { useState } from 'react';

export default function Projects() {
  const [expand, setExpand] = useState(false);
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);
  const toggleExpand = () => {
    setExpand(prev => !prev);
    setClicked(prev => !prev);
  };
  const toggleHover = () => {
    setHover(prev => !prev);
  };
  const toggleFilled = () => {
    if (hover && !clicked || !hover && clicked) {
      return 'arrow-right-filled';
    } else{
      return 'arrow-right';
    }
  };

  const description = 'Lorem ipsum dolor sit amet,  Integer quis auctor elit sed vulputate mi sit amet mauris.';
  return (
    <div className='projects-container'>
      <h1 className='portfolio-header'>Projects</h1>
      <ProjectCard projectName='Outfit Forecast' description={description} imgName='weather-bg' />
      <ProjectCard projectName='Klime' description={description} imgName='klime-bg' />
      <ProjectCard projectName='Boardgame Gathering' description={description} imgName='game-bg' />
      <ProjectCard projectName='Rancid Tomatillos' description={description} imgName='movie-bg' />
      <div className='more-projects'>
        <div className='expand-bar'>
          <h4 style={{ color: '#8D86BE' }}>{expand ? 'HIDE' : 'VIEW'} MORE</h4>
          <img
            onClick={toggleExpand}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            className={`arrow-icon ${(expand && 'toRight')}`}
            src={require(`../../Assets/${toggleFilled()}.png`)}
            alt='arrow'
          />
        </div>
        <div className={`accordion ${!expand && 'hidden'}`}>
          <span>accordion</span>
          <MiniCard />
          <MiniCard />
          <MiniCard />
        </div>
      </div>
    </div>
  );
}