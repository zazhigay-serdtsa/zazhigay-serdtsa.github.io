import style from './PhotoGallery.module.css';

import image1 from '../../assets/image1.svg';
import image2 from '../../assets/image2.svg';
import image3 from '../../assets/image3.svg';
import image4 from '../../assets/image4.svg';
import image5 from '../../assets/image5.svg';
import image6 from '../../assets/image6.svg';
import image7 from '../../assets/image7.svg';
import image8 from '../../assets/image8.svg';
import image9 from '../../assets/image9.svg';
import image10 from '../../assets/image10.svg';
import { useState } from 'react';

const Modal = ({ active, setActive, fullImage }) => {
  console.log(fullImage);
  return (
    <div className={style.modal} onClick={() => setActive(false)}>
      <img className={style.fullImage} src={fullImage} alt="logo" />
    </div>
  )
}

const PhotoGallery = () => {

  const [activeModal, setActiveModal] = useState(false);
  const [actualImage, setActualImage] = useState();

  const changeModal = (img) => {
    setActiveModal(true);
    setActualImage(img);
    console.log(img)
  }

  return (
    <div className={style.wrapper} id='gallery'>
      <p className={style.title}>Галерея</p>
      <div className={style.galleryWrap}>
        <img className={style.logo} src={image1} alt="logo1" onClick={() => changeModal(image1)}/>
        <img className={style.logo} src={image2} alt="logo2" onClick={() => changeModal(image2)} />
        <img className={style.logo} src={image3} alt="logo3" onClick={() => changeModal(image3)} />
        <img className={style.logo} src={image4} alt="logo4" onClick={() => changeModal(image4)} />
        <img className={style.logo} src={image5} alt="logo5" onClick={() => changeModal(image5)} />
        <img className={style.logo} src={image6} alt="logo6" onClick={() => changeModal(image6)} />
        <img className={style.logo} src={image7} alt="logo7" onClick={() => changeModal(image7)} />
        <img className={style.logo} src={image8} alt="logo8" onClick={() => changeModal(image8)} />
        <img className={style.logo} src={image9} alt="logo9" onClick={() => changeModal(image9)} />
        <img className={style.logo} src={image10} alt="logo10" onClick={() => changeModal(image10)} />
      </div>

      {activeModal && (
        <Modal 
          image={''} 
          active={activeModal} 
          setActive={setActiveModal}
          fullImage={actualImage}
        />
      )}
    </div>
  );
}

export default PhotoGallery;
