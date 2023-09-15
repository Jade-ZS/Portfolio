import './ProjectCard.css';
type props = {
  imgName: string,
  projectName: string,
  description: string
}
export default function ProjectCard({ imgName, projectName, description }: props) {
  const logoText = projectName.split(' ').map(word => <h1>{word}</h1>);
  return (
    <div className='project-card'>
      <div className='bg-container'>
        <img className='featured-project-bg' src={require(`../../Assets/${imgName}.png`)} />
        <div className='overlay'>
          <div className='logo-text'>
            {logoText}
          </div>
          <div className='project-intro'>
            <h3>{projectName}</h3>
            <p>{description}</p>
            <div className='expand-bar'>
              <h4>READ DETAILS</h4>
              <h4>⌄</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}