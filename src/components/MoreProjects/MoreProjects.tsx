import './MoreProjects.css';
import { moreDetails } from './moreDetailsData';

type props = {
  expand: boolean,
  toggleExpand: () => void,
  toggleHover: () => void,
  toggleFilled: () => string,
};

export default function MoreProjects({ expand, toggleExpand, toggleHover, toggleFilled }: props) {
  const moreProjects = Object.keys(moreDetails).map(key =>
    <div className='mini-card' key={key}>
      <img className='mini-cover' src={require(`./${moreDetails[key].image}`)} alt='project preview' />
      <div className='mini-overlay'>
        <div className='mini-content-container'>
          <h3>{key}</h3>
          <div className='tech-container'>
            {moreDetails[key].technologies.map(tech => <p key={tech}>{tech}</p>)}
          </div>
          <p>{moreDetails[key].description}</p>
          <div className='buttons-to-app'>
            <a href={moreDetails[key].github} target='blank'><button>CODE REPOSITORY</button></a>
            {moreDetails[key].deployment ? <a href={moreDetails[key].deployment} target='blank'><button>LAUNCH THE APP</button></a> : ''}
          </div>
        </div>
      </div>
    </div>
  );

  return (
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
        {moreProjects}
        <i aria-hidden='true' />
      </div>
    </div>
  );
}