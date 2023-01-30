import { NavLink } from 'react-router-dom';
import React from 'react';
import style from './style.module.scss';

const Header = () => (
  <div className={style.header}>
    <h1>JAC Enterprise</h1>
    <ul className={style.navList}>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/Nasa'>Nasa</NavLink>
      <NavLink to='/Museum'>MetMuseum</NavLink>
      <NavLink to='/Funfact'>FunFact</NavLink>
      <NavLink to='/Games'>Games</NavLink>
      <NavLink to='/Contact'>Contact</NavLink>
      
    </ul>
  </div>
);

export default Header;