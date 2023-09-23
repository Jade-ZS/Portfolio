import './ProjectDetail.css';

type props = {
  expand: boolean,
  // illustrations: array
}

export default function ProjectDetail({expand} : props) {
  return (
    <div className={`project-detail accordion ${!expand && 'hidden'}`}>
      <div className='content-container'>
        <div className='project-type'>
          <img className='icon' src={require('../../Assets/collaborator.png')} alt='collaborator icon'/>
          <span>Team Project</span>
        </div>
        <div className='tech-info'>
          <p>Technology Used</p>
          <div className='tech-container'>
            <p>Cypress</p>
            <p>React</p>
          </div>
        </div>
        <p>Klime is a React Native iOS application designed for rock climbers to create and design their own climbing problems by adding circles to existing climbing wall images. With Klime, users can save, name, and select difficulty levels for their climbing problems. Additionally, upcoming features will allow users to upload pictures and edit created problems.</p>
        <div className='buttons-to-app'>
          <button>CODE REPOSITORY</button>
          <button>LAUNCH THE APP</button>
        </div>
      </div>
      <div className='image-container'>
        <img src={require('../../Assets/placeholder.png')}  style={{height: '15rem'}}/>
        <div className='image-slider'>
        <img src={require('../../Assets/placeholder.png')}  style={{height: '4rem'}}/>
        <img src={require('../../Assets/placeholder.png')}  style={{height: '4rem'}}/>
        <img src={require('../../Assets/placeholder.png')}  style={{height: '4rem'}}/>
        <img src={require('../../Assets/placeholder.png')}  style={{height: '4rem'}}/>
        <img src={require('../../Assets/placeholder.png')}  style={{height: '4rem'}}/>
        <img src={require('../../Assets/placeholder.png')}  style={{height: '4rem'}}/>
        <img src={require('../../Assets/placeholder.png')}  style={{height: '4rem'}}/>
        </div>
      </div>
    </div>
  );
}