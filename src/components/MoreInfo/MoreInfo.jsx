import { useState } from 'react';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


import style from './MoreInfo.module.css';

import slide1 from '../../assets/slide1.png';
import slide2 from '../../assets/slide2.png';
import slide3 from '../../assets/slide3.png';
import slide4 from '../../assets/slide4.png';
import slide5 from '../../assets/slide5.png';
import slide6 from '../../assets/slide6.png';
import slide7 from '../../assets/slide7.png';
import slide8 from '../../assets/slide8.png';
import slide9 from '../../assets/slide9.png';
import slide10 from '../../assets/slide10.png';
import slide11 from '../../assets/slide11.png';
import slide12 from '../../assets/slide12.png';
import slide13 from '../../assets/slide13.png';
import slide14 from '../../assets/slide14.png';
import slide15 from '../../assets/slide15.png';
import slide16 from '../../assets/slide16.png';
import slide17 from '../../assets/slide17.png';
import slide18 from '../../assets/slide18.png';
import slide19 from '../../assets/slide19.png';
import slide20 from '../../assets/slide20.png';
import slide21 from '../../assets/slide21.png';

const steps = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10, slide11, slide12, slide13, slide14, slide15, slide16, slide17, slide18, slide19, slide20, slide21,];

const MoreInfo = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={style.wrapper} id='moreinfo'>
      <p className={style.title}>Подробнее</p>
      <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img className={style.logo} src={steps[activeStep]} alt="logo1" />
      </Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === 'rtl' ? (
              <ArrowBackIosNewIcon />
            ) : (
              <ArrowForwardIosIcon />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <ArrowForwardIosIcon />
            ) : (
              <ArrowBackIosNewIcon />
            )}
          </Button>
        }
      />
    </Box>
  </div>
  );
}

export default MoreInfo;
