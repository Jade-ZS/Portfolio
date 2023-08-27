import './Projects.css';
import ProjectCard from '../ProjectCard/ProjectCard';

export default function Projects() {
  return (
    <div className='projects-container'>
      <h1>Projects</h1>
      <div className='project-cards-container'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}