import './ProjectDetail.css';
import { Info } from '../../Types';
import { Link } from 'react-router-dom';
import { useState } from 'react';

type props = {
  expand: boolean,
  info: Info,
}

export default function ProjectDetail({ expand, info }: props) {
  const [clickedImgSrc, setClickedImgSrc] = useState(`${info.images[1]}`);
  const [clicked, setClicked] = useState(false);
  const handleClick = (e : any) => {
    setClickedImgSrc(e.target.id);
    setClicked(true);
  };



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
            {info.technologies.map(tech => <p key={tech}>{tech}</p>)}
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
          {info.images.length > 1 ? <img className='main-img' src={require(`../${clickedImgSrc}`)} alt='app preview' />
            : ''}
          <img className={info.imageClass ? info.imageClass : 'landscapeGif'} src={require(`../${info.images[0]}`)} alt='app preview' />
        </div>
        <div className={info.sliderClass ? info.sliderClass : 'image-slider'} >
          {(info.images.length > 1) && info.images.slice(1).map(image => <img className={clickedImgSrc===image ? 'clicked' : ''} id={image} onClick={handleClick} key={image} alt='mini preview' src={require(`../${image}`)} />)}
        </div>
      </div>
    </div>
  );
}