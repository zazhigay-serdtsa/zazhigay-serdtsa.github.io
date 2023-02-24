import React from 'react';

import HeaderLogo from '../../assets/logo.svg'
import style from './Footer.module.css';

const Footer = () => {
  return <div className={style.wrapper}>
    <div className={style.info}>
      <div className={style.question}>Есть вопросы?</div>
      <div className={style.address}>
        Адрес организации:
        <br/>
        г.Таганрог, 
        <br/>
        ул.Дзержинского 171/2
      </div>
      <div className={style.contact}>
        Email: 
        <a href="mailto:luchnadeigy23@gmail.com" className={style.email}>
          luchnadeigy23@gmail.com
        </a>
      <br />
      Телефон: +79525751901
      <br />
      Директор - Бартенева Сенильга Эмильевна
      </div>
    </div>
    <div className={style.endPage}>
      <div className={style.logoAndTitle}>
        <img src={HeaderLogo} alt="logo" />
        <p className={style.title}>Зажигай сердца</p>
      </div>
      <button className={style.button}>
        <a href="mailto:luchnadeigy23@gmail.com" className={style.button}>
          Cвязаться с нами
        </a>
      </button>
    </div>
  </div>;
};

export default Footer;
