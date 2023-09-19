import './Skills.css';
import ChaiLogo from '../Icons/ChaiLogo';
import CssLogo from '../Icons/CssLogo';
import CyLogo from '../Icons/CyLogo';
import HtmlLogo from '../Icons/HtmlLogo';
import JSLogo from '../Icons/JSLogo';
import MochaLogo from '../Icons/MochaLogo';
import PwaLogo from '../Icons/PwaLogo';
import ReactLogo from '../Icons/ReactLogo';
import TSLogo from '../Icons/TSLogo';

export default function Skills() {
  return (
    <div className='skills-container' id='skills'>
      <h1 className='portfolio-header'>Skills</h1>
      <div className='skill-cards-container'>
        <img className='skill-bg' src={require('../../Assets/wave-haikei.png')}/>
        <div className='skill-card grid-item-1'>
          <h1>Front End</h1>
          <span>Lorem ipsum</span>
          <span>Lorem ipsum</span>
          <span>Lorem ipsum</span>
          <span>Lorem ipsum</span>
          <span>Lorem ipsum</span>
        </div>
        <div className='skill-card grid-item-2'>
          <h1>Back End</h1>
          <span>Lorem ipsum</span>
          <span>Lorem ipsum</span>
          <span>Lorem ipsum</span>
          <span>Lorem ipsum</span>
          <span>Lorem ipsum</span>
        </div>
        <div className='skill-card grid-item-3'>
          <h1>UI/UX</h1>
          <span>Lorem ipsum</span>
          <span>Lorem ipsum</span>
          <span>Lorem ipsum</span>
          <span>Lorem ipsum</span>
          <span>Lorem ipsum</span>
        </div>
        <div className='skill-card grid-item-4'>
          <h1>Testing</h1>
          <span>Lorem ipsum</span>
          <span>Lorem ipsum</span>
          <span>Lorem ipsum</span>
          <span>Lorem ipsum</span>
          <span>Lorem ipsum</span>
        </div>
      </div>
    </div>
  );
}