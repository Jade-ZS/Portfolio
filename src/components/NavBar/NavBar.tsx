import React from 'react'
import './NavBar.css';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className='nav-bar'>
      <h1 className='name'>Ziyu "Jade" Shi</h1>
      <div className='right'>
        <h1>Home</h1>
        <h1>Skills</h1>
        <h1>Projects</h1>
        <h1>My Story</h1>
        <h1>Contact</h1>
      </div>
    </div>
  );
}