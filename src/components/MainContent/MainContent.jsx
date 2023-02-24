import React from 'react';

import style from './MainContent.module.css';
import MainContentImage1 from '../../assets/mainContentImage1.svg';
import MainContentImage2 from '../../assets/mainContentImage2.svg';
import Frame from '../../assets/frame.svg';

const MainContent = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.titleWrap}>
      <div className={style.title}>
      <p>Все мы ра</p>
      <div className={style.literaWrap}>
        <p className={style.litera}>з</p>
        <p className={style.litera}>в</p>
      </div>
      <p>ные</p>
      <div className={style.colorBlock}/>
      </div>
      <p className={style.text}>Онлайн-платформа для инклюзивного просвещения населения</p>
      <button className={style.button}>
        <a href={`#moreinfo`}>
        Узнать больше
        </a>
      </button>
      </div>

      <div className={style.imageWrap}>
        <div className={style.logoWithFrame1}>
          <img className={style.mainImage1} src={MainContentImage1} alt="logo" />
          <img className={style.frame1} src={Frame} alt="Frame" />
        </div>
        <div className={style.logoWithFrame2}>
          <img className={style.mainImage2} src={MainContentImage2} alt="logo" />
          <img className={style.frame2} src={Frame} alt="Frame" />
        </div>
        <div className={style.smallColorBlock1}/>
        <div className={style.smallColorBlock2}/>
        <div className={style.smallColorBlock3}/>
      </div>
    </div>
  );
}

export default MainContent;
