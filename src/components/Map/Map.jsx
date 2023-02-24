import React from 'react';

import MapImage from '../../assets/map.svg';
import style from './Map.module.css';

const Map = () => {
  return (
    <div className={style.wrapper} id="map">
      <p className={style.title}>Наши цифры</p>
      <div className={style.static}>
        <div className={style.staticItems}>
          <div className={style.staticItem1}>
            1.304
            <br />
            млн.
          </div>
          <div className={style.staticTitle}>
            Инвалиды I
            <br />
            Группы
          </div>
        </div>
        <div className={style.staticItem}>
          <div className={style.staticItem2}>
            4.745
            <br />
            млн.
          </div>
          <div className={style.staticTitle}>
            Инвалиды II
            <br />
            Группы
          </div>
        </div>
        <div className={style.staticItem}>
          <div className={style.staticItem3}>
            4.553
            <br />
            млн.
          </div>
          <div className={style.staticTitle}>
            Инвалиды III
            <br />
            Группы
          </div>
        </div>
        <div className={style.staticItem}>
          <div className={style.staticItem4}>
            729
            <br />
            млн.
          </div>
          <div className={style.staticTitle}>
            Дети-
            <br />
            инвалиды
          </div>
        </div>
      </div>
      <p className={style.subtitle}>По состоянию на 1 января 2022 года</p>
      <button className={style.button}>Подробнее</button>
      <img className={style.imageMap} src={MapImage} alt="map" />
    </div>
  );
};

export default Map;
