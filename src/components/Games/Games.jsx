import React from 'react';

import CardComponent from '../Card';
import style from './Games.module.css';

const easyLvl = [
  {
    title: 'Игра 1',
    subtitle: 'Задание: распределить животных на 2 группы: домашние и дикие',
    image: 'https://phonoteka.org/uploads/posts/2021-06/1625010944_26-phonoteka_org-p-detskie-oboi-minimalizm-krasivo-26.jpg',
    link: 'https://learningapps.org/display?v=p4i03t1y217',
  },
  {
    title: 'Игра 2',
    subtitle: 'Задание: соотнести название животного с его изображением',
    image: 'https://img2.goodfon.ru/wallpaper/nbig/1/7f/zhiraf-minimalizm-risunok.jpg',
    link: 'https://learningapps.org/display?v=p1d763sot22',
  },
  {
    title: 'Игра 3',
    subtitle: 'Задание: найти одинаковые карточки',
    image: 'https://kartinkin.net/uploads/posts/2021-07/1625511308_6-kartinkin-com-p-detskie-foni-minimalizm-krasivie-foni-9.jpg',
    link: 'https://learningapps.org/display?v=p0sd2xfd522',
  },
  {
    title: 'Игра 4',
    subtitle: 'Задание: соотнести название животного с его изображением ',
    image: 'https://celes.club/uploads/posts/2022-06/1654821553_3-celes-club-p-detskie-oboi-minimalizm-krasivie-3.jpg',
    link: 'https://learningapps.org/display?v=p113a2ji322',
  },
];

const difficultLvl = [
  {
    title: 'Игра 1',
    subtitle:
      'Задание: нужно будет угадать имя одного из представителей семьи Романовых',
    image: 'https://oir.mobi/uploads/posts/2022-08/1661431283_1-oir-mobi-p-igrovoi-zadnii-fon-pinterest-1.jpg',
    link: 'https://learningapps.org/display?v=pm1kgmjfn22',
  },
  {
    title: 'Игра 2',
    subtitle: 'Задание: найти одинаковые ягоды',
    image: 'https://img.freepik.com/premium-vector/cute-seamless-pattern-with-red-berries-and-leaves-isolated-on-white-background-use-for-nursery-design-clothes-textile-minimalistic-design-with-small-elements_651749-77.jpg',
    link: 'https://learningapps.org/display?v=pzahbihnn22',
  },
  {
    title: 'Игра 3',
    subtitle: 'Задание: найти название цветов',
    image: 'https://gamerwall.pro/uploads/posts/2022-05/1652463865_1-gamerwall-pro-p-minimalistichnii-detskii-fon-oboi-krasivo-2.jpg',
    link: 'https://learningapps.org/display?v=phx33zio522',
  },
  {
    title: 'Игра 4',
    subtitle: 'Задание: найти название профессий',
    image: 'https://gamerwall.pro/uploads/posts/2021-11/1637895612_19-gamerwall-pro-p-minimalistichnie-detskie-oboi-oboi-na-rabo-20.jpg',
    link: 'https://learningapps.org/display?v=p13day76c22',
  },
];

const Games = () => {
  return (
    <div className={style.wrapper} id="games">
      <p className={style.title}>Игры</p>
      <p className={style.subtitle}>Уровень: простой</p>
      <div className={style.games}>
        {easyLvl.map((item) => {
          return (
            <div onClick={() => window.location.href = item.link}>
              <CardComponent
                key={item.title}
                title={item.title}
                subtitle={item.subtitle}
                image={item.image}
              />
            </div>
          );
        })}
      </div>
      <p className={style.subtitle}>Уровень: сложный</p>
      <div className={style.games}>
        {difficultLvl.map((i) => {
          return (
            <div onClick={() => window.location.href = i.link}>
              <CardComponent
                title={i.title}
                subtitle={i.subtitle}
                image={i.image}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Games;
