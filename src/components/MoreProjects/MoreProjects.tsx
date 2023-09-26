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
    <div>
      <img className='mini-cover' src={require(`./${moreDetails[key].image}`)} alt='project preview'/>
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
      </div>
    </div>
  );
}