import './ProjectDetail.css';

type props = {
  expand: boolean,
  // illustrations: array
}

export default function ProjectDetail({expand} : props) {
  return (
    <div className={`project-detail accordion ${!expand && 'hidden'}`}>
      <img src={require('../../Assets/placeholder.png')}  style={{height: '3rem'}}/>
    </div>
  );
}