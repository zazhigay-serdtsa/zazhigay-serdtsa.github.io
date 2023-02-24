import React from 'react';

import HeaderLogo from '../../assets/logo.svg'
import style from './Header.module.css';

const menuItems = [
  {
    title: 'Главная',
    link: '',
  },
  {
    title: 'Галерея',
    link: 'gallery',
  },
  {
    title: 'Игры',
    link: 'games',
  },
  {
    title: 'О нас',
    link: 'moreinfo',
  },
];

const Header = () => {
  return (
    <div className={style.header}>
      
      <div className={style.logoAndTitle}>
        <img className={style.logo} src={HeaderLogo} alt="logo" />
        <p className={style.title}>Зажигай сердца</p>
      </div>

      <div className={style.menuItems}>
        {menuItems.map((i) => {
          return (
            <a key={i.link} href={`#${i.link}`} className={style.menuItem}>
              {i.title}
            </a>
          );
        })}
      </div>
      <div>
    </div>
    </div>
  );
};

export default Header;
