import './Resume.css';

export default function Experience() {
  return (
    <div>
      <h1>Resume</h1>
      <a className='view-resume-button' target='blank' href='https://drive.google.com/file/d/1oDQRNW_OSkG0EixDvABJI0e5RtIlxYlT/view?usp=sharing'>View Resume</a>
      <a className='download-resume-button' href={require("./resume.pdf")} download="Jade-Shi-Resume">Download file</a>
    </div>
  )
}