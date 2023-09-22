import './ProjectDetail.css';

export default function ProjectDetail({expand} : {expand: boolean}) {
  return (
    <div className={`project-detail accordion ${!expand && 'hidden'}`}>
      <img src={require('../../Assets/placeholder.png')}  style={{height: '3rem'}}/>
    </div>
  );
}