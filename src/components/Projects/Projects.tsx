import './Projects.css';
import ProjectCard from '../ProjectCard/ProjectCard';

export default function Projects() {
  const description = 'Lorem ipsum dolor sit amet,  Integer quis auctor elit sed vulputate mi sit amet mauris.'
  return (
    <div className='projects-container'>
      <h1 className='portfolio-header'>Projects</h1>
      <ProjectCard projectName='Outfit Forecast' description={description} imgName='weather-bg'/>
      <ProjectCard projectName='Klime' description={description} imgName='klime-bg'/>
      <ProjectCard projectName='Boardgame Gathering' description={description} imgName='game-bg'/>
      <ProjectCard projectName='Rancid Tomatillos' description={description} imgName='movie-bg'/>
    </div>
  );
}