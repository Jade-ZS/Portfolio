import './ProjectCard.css';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import ProjectDetail from '../ProjectDetail/ProjectDetail';

type props = {
  imgName: string,
  projectName: string,
  description: string
}

export default function ProjectCard({ imgName, projectName, description }: props) {
  const [expand, setExpand] = useState(false);
  const handleExpand = () => {
    setExpand(prev => !prev);
  }

  const logoText = projectName.split(' ').map(word => <h1 key={uuid()}>{word}</h1>);
  const overlay = (
    <div className='overlay'>
      <div className='logo-text'>
        {logoText}
      </div>
      <div className='project-intro'>
        <h3>{projectName}</h3>
        <p>{description}</p>
        <div className='expand-bar' onClick={handleExpand}>
          <h4>{expand ? 'HIDE' : 'READ'} DETAILS</h4>
          <img className={`arrow-icon ${(expand && 'flipped')}`} src={require('../../Assets/down-arrow-double.png')} alt='arrow'/>
        </div>
      </div>
    </div>
  );

  return (
    <div className='project-card'>
      <div className='bg-container'>
        <img className='featured-project-bg' src={require(`../../Assets/${imgName}.png`)} />
        {overlay}
      </div>
      <ProjectDetail expand={expand}/>
    </div>
  );
}