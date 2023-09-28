import './Resume.css';

export default function Experience() {
  return (
    <div className='resume' id='resume'>
      <img className='illustration' src='https://illustrations.popsy.co/purple/student-going-to-school.svg' alt='student-raising-hand' />
      <a className='view-resume-button' target='blank' href='https://drive.google.com/file/d/1oDQRNW_OSkG0EixDvABJI0e5RtIlxYlT/view?usp=sharing'>
        <img src={require('../../Assets/view.png')} />
        <p>View Resume</p>
      </a>
      <a className='download-resume-button' href={require("./resume.pdf")} download="Jade-Shi-Resume">
        <img src={require('../../Assets/download.png')} />
        <p>Download Resume</p>
      </a>
    </div>
  )
}