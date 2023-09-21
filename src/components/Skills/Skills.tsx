import './Skills.css';

export default function Skills() {
  return (
    <div className='skills-container' id='skills'>
      <h1 className='portfolio-header'>Skills</h1>
      <div className='skill-cards-container'>
        <img className='skill-bg' src={require('../../Assets/wave-haikei.png')}/>
        <div className='skill-card'>
          <h1>Front End</h1>
          <span>React</span>
          <span>React Native</span>
          <span>TypeScript</span>
          <span>Progressive Web Application</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Assessibility Practices</span>
        </div>
        <div className='skill-card'>
          <h1>Back End</h1>
          <span>Express JS</span>
          <span>MongoDB</span>
          <span>SQLite</span>
          <span>Python</span>
          <span>Java</span>
        </div>
        <div className='skill-card'>
          <h1>UI/UX</h1>
          <span>Figma</span>
          <span>inVision</span>
          <span>Miro</span>
          <span>Mobile-First Design</span>
        </div>
        <div className='skill-card'>
          <h1>Testing</h1>
          <span>Cypress</span>
          <span>TDD (Mocha/Chai)</span>
          <span>Accessibility (Lighthouse/Wave)</span>
        </div>
        <div className='skill-card'>
          <h1>Others</h1>
          <span>Git</span>
          <span>Agile Practices</span>
          <span>RESTful APIs</span>
          <span>Project Management Tools</span>
        </div>
      </div>
    </div>
  );
}