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
      <div className='main-img-container'>
        {info.images.length > 1 ? <img className='main-img' src={require(`../${info.images[1]}`)} alt='app preview' />
: ''}
        <img className={info.imageClass} src={require(`../${info.images[0]}`)} alt='app preview' />
      </div>
        <div className={info.sliderClass ? info.sliderClass : 'image-slider'}>
          {info.images.slice(1).map(image => <img src={require(`../${image}`)}/>)}
        </div>
      </div>
    </div>
  );
}