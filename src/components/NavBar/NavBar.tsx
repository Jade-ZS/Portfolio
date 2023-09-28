import React, { useState } from 'react';
import './NavBar.css';
import { NavLink, useLocation } from 'react-router-dom';
import { downArrow } from '../../Assets/down-arrow';
import { hamburger } from '../../Assets/hamburger';

export default function NavBar({show, setShow} : {show: boolean, setShow: any}) {

  return (
    <div
      className={`dropdown ${show && 'show'}`}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <NavLink to='/portfolio'>
        <div className='hamburger-container' aria-controls='primary-navigation' aria-expanded='false'>{hamburger}</div>
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
  );

}