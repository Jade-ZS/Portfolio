import './Skills.css';

export default function Skills() {
  return (
    <div className='skills-container' id='skills'>
      <h1 className='portfolio-header'>Skills</h1>
      <div className='skill-cards-container'>
        <div className='skill-card'>
          <div className='skill-icon-container'>
            <img className='skill-icon' src={require('../../Assets/design-icon.png')} alt='design icon' />
          </div>
          <h1>UI/UX</h1>
          <span>Figma, inVision, Miro</span>
          <span>Mobile-First Design</span>
          <span>Responsive Design</span>
        </div>
        <div className='skill-card'>
          <div className='skill-icon-container'>
            <img className='skill-icon' src={require('../../Assets/front-end-icon.png')} alt='design icon' />
          </div>
          <h1>Front End</h1>
          <span>JavaScript, HTML, CSS</span>
          <span>React, React Native, TypeScript</span>
          <span>Progressive Web Application</span>
          <span>Assessibility Practices</span>
          <h1>Testing</h1>
          <span>Cypress</span>
          <span>TDD (Mocha/Chai)</span>
          <span>Accessibility (Lighthouse/Wave)</span>
        </div>
        <div className='skill-card'>
          <div className='skill-icon-container'>
            <img className='skill-icon' src={require('../../Assets/server-icon.png')} alt='design icon' />
          </div>
          <h1>Back End</h1>
          <span>Express JS</span>
          <span>MongoDB</span>
          <span>SQLite</span>
          <span>Python</span>
          <span>Java</span>
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