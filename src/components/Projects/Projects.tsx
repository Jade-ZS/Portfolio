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
    } else {
      return 'arrow-right';
    }
  };

  const description = 'Lorem ipsum dolor sit amet,  Integer quis auctor elit sed vulputate mi sit amet mauris.';
  return (
    <div className='projects-container' id='projects'>
      <div style={{ height: '2rem' }} />
      <h1 className='portfolio-header'>Projects</h1>
      <ProjectCard
        projectName='Outfit Forecast'
        description={'A React application that allows users to search simultaneous weather by location and get outfit recommendations'}
        imgName='weather-bg'
      />
      <ProjectCard
        projectName='Klime'
        description={'A React Native iOS mobile app that allows users to create and design their own climbing problems by photo-editing'}
        imgName='klime-bg'
      />
      <ProjectCard
        projectName='Boardgame Gathering'
        description={'A Progressive Web Application that allows users to search and browse through a selection of featured games'}
        imgName='game-bg'
      />
      <ProjectCard
        projectName='Rancid Tomatillos'
        description={'A React application designed to help movie enthusiasts search for movies, view their details, and rate them.'}
        imgName='movie-bg'
      />
      <div className='more-projects'>
        <div className='expand-bar'>
          <h4>{expand ? 'HIDE' : 'VIEW'} MORE PROJECTS</h4>
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
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />

        </div>
      </div>
    </div>
  );
}