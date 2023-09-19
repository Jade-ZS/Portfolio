import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
 
  return (
    <div className={`nav-bar shadow`}>
      <h1 className='name'>Ziyu "Jade" Shi</h1>
      <div className='right'>
        <NavLink to='/'><h1>Home</h1></NavLink>
        <NavLink to='/portfolio'><h1>Portfolio</h1></NavLink>
        <NavLink to='/story'><h1>My Story</h1></NavLink>
        <NavLink to='/contact'><h1>Contact</h1></NavLink>
      </div>
    </div>
  );
}