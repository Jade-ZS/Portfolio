import './MoreProjects.css';
import MiniCard from '../MiniCard/MiniCard';

type props = {
  expand: boolean,
  toggleExpand: () => void,
  toggleHover: () => void, 
  toggleFilled: () => string,
};

export default function MoreProjects({expand, toggleExpand, toggleHover, toggleFilled} : props) {
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
  );
}