import './Resume.css';

export default function Experience() {
  return (
    <div>
      <h1>Resume</h1>
      <a href={require("./resume.pdf")} download="Jade-Shi-Resume">Download file</a>
    </div>
  )
}