import './ProjectDetail.css';
import { Info } from '../../Types';
import { Link } from 'react-router-dom';

type props = {
  expand: boolean,
  info: Info,
}

export default function ProjectDetail({ expand, info }: props) {

  return (
    <div className={`project-detail accordion ${!expand && 'hidden'}`}>
      <div className='content-container'>
        <div className='project-type'>
          <img className='icon' src={require('../../Assets/collaborator.png')} alt='collaborator icon' />
          <span>{info.type}</span>
        </div>
        <div className='tech-info'>
          <p>Technology Used</p>
          <div className='tech-container'>
            {info.technologies.map(tech => <p>{tech}</p>)}
          </div>
        </div>
        <p>{info.description}</p>
        <div className='buttons-to-app'>
          <Link to={info.github} target='blank'>
            <button>CODE REPOSITORY</button>
          </Link>
          {
            info.deployment.length ?
            <Link to={info.deployment} target='blank'>
              <button>LAUNCH THE APP</button>
            </Link> : ''
          }
        </div>
      </div>
      <div className='image-container'>
        <img src={require('../Projects/projectImages/rancid.gif')} style={{ height: '15rem' }} />
        <div className='image-slider'>
          <img src={require('../../Assets/placeholder.png')} style={{ height: '4rem' }} />
          <img src={require('../../Assets/placeholder.png')} style={{ height: '4rem' }} />
          <img src={require('../../Assets/placeholder.png')} style={{ height: '4rem' }} />
          <img src={require('../../Assets/placeholder.png')} style={{ height: '4rem' }} />
          <img src={require('../../Assets/placeholder.png')} style={{ height: '4rem' }} />
          <img src={require('../../Assets/placeholder.png')} style={{ height: '4rem' }} />
          <img src={require('../../Assets/placeholder.png')} style={{ height: '4rem' }} />
        </div>
      </div>
    </div>
  );
}