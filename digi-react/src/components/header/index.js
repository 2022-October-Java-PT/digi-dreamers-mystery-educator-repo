import { NavLink } from 'react-router-dom';
import React from 'react';
import style from './style.module.scss';

const Header = () => (
  <div className={style.header}>
    <h1>Library Demo</h1>
    <ul className={style.navList}>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/nasa'>Nasa</NavLink>
      <NavLink to='/metmuseum'>MetMuseum</NavLink>
      <NavLink to='/funfact'>FunFact</NavLink>
    </ul>
  </div>
);

export default Header;