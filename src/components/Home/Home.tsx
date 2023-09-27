import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Projects from '../Projects/Projects';
import GithubIcon from '../Icons/GithubIcon';
import GmailIcon from '../Icons/GmailIcon';
import LinkedInIcon from '../Icons/LinkedInIcon';
import { hamburger } from '../../Assets/hamburger';

export default function Home() {

  return (
    <div className='home'>
      <div className='hamburger-container' aria-controls='primary-navigation' aria-expanded='false'>{hamburger}</div>
      <div className='intro-container'>
        <img className='profile' alt='profile image' src={require('../../Assets/profile.JPG')} />
        <div className='intro-bottom'>
          <h1>Hi, I'm Ziyu "Jade" Shi!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <div className='contacts-box'>
            <Link to='/'><LinkedInIcon /></Link>
            <Link to='/'><GithubIcon /></Link>
            <Link to='/'><GmailIcon /></Link>
          </div>
        </div>
      </div>
    </div>
  );
}