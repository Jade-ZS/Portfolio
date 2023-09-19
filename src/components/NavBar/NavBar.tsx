import React from 'react';
import './NavBar.css';
import { NavLink, useLocation } from 'react-router-dom';

export default function NavBar() {
  const { pathname } = useLocation();

  return (
    <div className={`nav-bar ${pathname.length > 2 && 'shadow'}`}>
      <h1 className='name'>Ziyu "Jade" Shi</h1>
      <div className='right'>
        <NavLink to='/'><h1>Home</h1></NavLink>
        <div className='dropdown'>
          <NavLink to='/portfolio'>
            <h1>Portfolio</h1>
          </NavLink>
          <div className='dropdown-menu'>
            menu
          </div>
        </div>
        <NavLink to='/story'><h1>My Story</h1></NavLink>
        <NavLink to='/contact'><h1>Contact</h1></NavLink>
      </div>
    </div>
  );
}