import './ProjectCard.css';

export default function ProjectCard() {
  return (
    <div className='project-card'>
      <img alt='project screenshot' className='project-img' src={require('../../Assets/sad_path.mov')}/>
      <p>Project intro Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore m</p>
    </div>
  )
}
