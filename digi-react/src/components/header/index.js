import { NavLink } from 'react-router-dom';
import React from 'react';
import style from './style.module.scss';

const Header = () => (
  <div className={style.header}>
    <h1>JAC Enterprises</h1>
    <ul className={style.navList}>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/Nasa'>Nasa</NavLink>
      <NavLink to='/NasaGallery'>Nasa Gallery</NavLink>
      <NavLink to='/Museum'>Met Museum</NavLink>
      <NavLink to='/Funfact'>Fun Fact</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/Games'>Games</NavLink>
      <NavLink to='/Contact'>Contact</NavLink>
    </ul>
  </div>
);

export default Header;