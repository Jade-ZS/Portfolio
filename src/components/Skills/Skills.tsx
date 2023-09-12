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
    <div className='skills-container'>
      <h1 className='portfolio-header'>Skills</h1>
      <div className='skill-cards-container'>
        {/* <JSLogo />
        <HtmlLogo />
        <CssLogo />
        <ReactLogo />
        <TSLogo />
        <PwaLogo />
        <CyLogo />
        <MochaLogo />
        <ChaiLogo /> */}

        <div className='skill-card grid-item-1'>
          <h1>Front End</h1>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
        </div>
        <div className='skill-card grid-item-2'>
          <h1>Back End</h1>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
        </div>
        <div className='skill-card grid-item-3'>
          <h1>UI/UX</h1>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
        </div>
        <div className='skill-card grid-item-4'>
          <h1>Testing</h1>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
        </div>
      </div>
    </div>
  );
}