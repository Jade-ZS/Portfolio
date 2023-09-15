import './ProjectCard.css';
type props = {
  imgName: string,
  projectName: string,
  description: string
}
export default function ProjectCard({ imgName, projectName, description }: props) {
  return (
    <div className='project-cards-container'>
      <div className='bg-container'>
        <img className='featured-project-bg' src={require(`../../Assets/${imgName}.png`)} />
        <div className='overlay'>
          <h1>{projectName}</h1>
          <div className='project-intro'>
            <p>{projectName}</p>
            <p>{description}</p>
            <div className='expand-bar'>
              <p>READ DETAILS</p>
              <p>⌄</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}