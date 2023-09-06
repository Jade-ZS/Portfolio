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
      <h1>Skills</h1>
      <div className='logo-container'>
        <JSLogo />
        <HtmlLogo />
        <CssLogo />
        <ReactLogo />
        <TSLogo />
        <PwaLogo />
        <CyLogo />
        <MochaLogo />
        <ChaiLogo />
      </div>
    </div>
  );
}