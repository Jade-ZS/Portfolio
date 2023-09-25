import React, { useState } from 'react';
import './NavBar.css';
import { NavLink, useLocation } from 'react-router-dom';
import { downArrow } from '../../Assets/down-arrow';

export default function NavBar() {
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);

  return (
    <div className={`nav-bar ${pathname.length > 2 && 'shadow'} ${pathname.includes('portfolio') && 'purple-bg'}`}>
      <h1 className='name'>Ziyu "Jade" Shi</h1>
      <div className='right'>
        <NavLink to='/'><h1>Home</h1></NavLink>
          <div 
            className={`dropdown ${pathname.includes('portfolio') && 'purple-bg active'} `}
            onMouseEnter={() => pathname.includes('portfolio') && setShow(true)}
            onMouseLeave={() => pathname.includes('portfolio') && setShow(false)}
          >
            <NavLink to='/portfolio'>
              <h1>Portfolio {pathname.includes('portfolio') ? downArrow : ''}</h1>
            </NavLink>
            <div className={`dropdown-menu ${show && 'show'}`}>
              <NavLink to='/portfolio/#skills'>
                <p>Skills</p>
              </NavLink>
              <NavLink to='/portfolio/#projects'>
                <p>Projects</p>
              </NavLink>
              <NavLink to='/portfolio/#resume'>
                <p>Resume</p>
              </NavLink>
            </div>
          </div>
        <NavLink to='/story'><h1>My Story</h1></NavLink>
        <NavLink to='/contact'><h1>Contact</h1></NavLink>
      </div>
    </div>
  );
}