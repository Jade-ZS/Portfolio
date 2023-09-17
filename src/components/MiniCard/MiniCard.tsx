import './MiniCard.css';

export default function MiniCard() {
  return (
    <div className='mini-card'>
      <img src={require('../../Assets/h.png')} />
      <h1>Title</h1>
      <p>description</p>
      <div className='link-bar'>
        <button>github</button>
        <button>deployed link</button>
      </div>
    </div>
  );
};