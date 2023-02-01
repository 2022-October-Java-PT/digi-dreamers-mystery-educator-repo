import React from 'react';
import style from './style.module.scss';

const Footer = () => (
  <div className={style.footer}>
    <h3>&copy; Digi-Dreamers 2023</h3>
    <ul className={style.socialList}>
      <li><a href="https://github.com/2022-October-Java-PT/digi-dreamers-mystery-educator-repo" target="_blank" rel="noopener noreferrer">GitHub</a></li>
      
    </ul>
  </div>
);

export default Footer;