import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Projects from '../Projects/Projects';
import GithubIcon from '../Icons/GithubIcon';
import GmailIcon from '../Icons/GmailIcon';
import LinkedInIcon from '../Icons/LinkedInIcon';
import {downArrow } from '../../Assets/down-arrow'

export default function Home() {

  return (
    <div className='home'>
      <div className='intro-container'>
        <img className='profile' alt='profile image' src={require('../../Assets/profile.JPG')} />
        <div className='intro-bottom'>
          <h1>Hi, I'm Ziyu "Jade" Shi!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <div className='contacts-box'>
            <a href='https://www.linkedin.com/in/ziyu-jade-shi/' target='blank'><LinkedInIcon /></a>
            <a href='https://github.com/Jade-ZS' target='blank'><GithubIcon /></a>
            <a href='mailto:ziyushi1997@gmail.com' target='blank'><GmailIcon /></a>
          </div>
          <svg className="arrows">
							<path className="a1" d="M0 0 L30 32 L60 0"></path>
							<path className="a2" d="M0 20 L30 52 L60 20"></path>
							<path className="a3" d="M0 40 L30 72 L60 40"></path>
						</svg>
        </div>
      </div>
    </div>
  );
}