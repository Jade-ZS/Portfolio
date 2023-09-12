import './Projects.css';
import ProjectCard from '../ProjectCard/ProjectCard';

export default function Projects() {
  return (
    <div className='projects-container'>
      <h1 className='portfolio-header'>Projects</h1>
      <div className='project-cards-container'>
        <div className='bg-container'>
          <img className='featured-project-bg' src={require('../../Assets/weather-bg.png')}/>
          <div className='overlay'>
            <p>hi</p>
          </div>
        </div>
        {/* <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard /> */}
      </div>
    </div>
  );
}