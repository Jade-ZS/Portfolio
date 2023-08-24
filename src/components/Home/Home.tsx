import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className='home'>
      <div className='intro-container'>
        <div className='intro-text'>
          <h1>Hi, I'm Ziyu "Jade" Shi!</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className='contacts-box'>
          <Link to='/'><img alt='linkedIn icon' src={require('../../Assets/linkedIn-icon.svg')}/></Link>
          <Link to='/'><img alt='github icon' src={require('../../Assets/github-icon.svg')}/></Link>
          <Link to='/'><img alt='gmail icon' src={require('../../Assets/gmail-icon.svg')}/></Link>
        </div>
      </div>
      <img className='profile' alt='profile image' src={require('../../Assets/profile.JPG')}/>
    </div>
  );
}