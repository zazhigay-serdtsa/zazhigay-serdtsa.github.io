import { Avatar, Accordion, AccordionSummary, AccordionDetails, Typography, styled  } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import style from './LifeStories.module.css';
import { LifeHistoryArray } from './constants';

const StyledAccordionSummary = styled(AccordionSummary)({
  '.MuiAccordionSummary-content': {
    display: 'flex',
    alignItems: 'center', 
    gap: '20px'
  },
});

const LifeStories = () => {
  return (
  <div className={style.wrapper}>
    <p className={style.title}>Истории из жизни</p>
    {LifeHistoryArray.map((item) => {return (
      <Accordion>
          <StyledAccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Avatar alt="Remy Sharp" src={item.avatar} />
          <Typography>{item.name}</Typography>
        </StyledAccordionSummary>
        <AccordionDetails>
          <Typography>{item.history}</Typography>
        </AccordionDetails>
      </Accordion>
    )})}
</div>
  )
};

export default LifeStories;
