import './Skills.css';

export default function Skills() {
  return (
    <div className='skills-container' id='skills'>
      {/* <h1 className='skill-header'>Skills</h1> */}
      <div className='skill-card'>
        <div className='skill-icon-container'>
          <img className='skill-icon' src={require('../../Assets/design-icon.png')} alt='design icon' />
        </div>
        <h1>UI/UX</h1>
        <h3>Design Tools:</h3>
        <span>Figma, inVision, Miro</span>
        <h3>I practice:</h3>
        <span>Mobile-First Design</span>
        <span>Responsive Design</span>
      </div>
      <div className='skill-card'>
        <div className='skill-icon-container'>
          <img className='skill-icon' src={require('../../Assets/front-end-icon.png')} alt='design icon' />
        </div>
        <h1>Front End</h1>
        <h3>Languages/Frameworks:</h3>
        <span>JavaScript, HTML, CSS</span>
        <span>React, React Native, Angular, TypeScript</span>
        <h3>User Interface:</h3>
        <span>Progressive Web Application</span>
        <span>Assessibility Practices</span>
        <h3>Testing:</h3>
        <span>Cypress</span>
        <span>TDD (Mocha/Chai)</span>
        <span>Accessibility (Lighthouse/Wave)</span>
      </div>
      <div className='skill-card'>
        <div className='skill-icon-container'>
          <img className='skill-icon' src={require('../../Assets/server-icon.png')} alt='design icon' />
        </div>
        <h1>Back End</h1>
        <h3>Languages/Tools:</h3>
        <span>Express JS, Python</span>
        <span>Java, SQLite, MongoDB</span>
        <h3>Others:</h3>
        <span>RESTful APIs</span>
        <span>Agile Practices, Git Workflow</span>
        <span>Project Management</span>
      </div>
    </div>
  );
}