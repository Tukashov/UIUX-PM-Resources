import './ContentAccardion.scss';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function ContentAccardion(props) {
    return (
        <div className='Accardion-Block'>
            <div className='Accardion-Block__List'>
                <Accordion className='Accardion-Block__List__Item'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className='Summary'
                    >
                        <h4 className='Accardion-Block__Title'>{props.title}</h4>
                        <h6 className='Accardion-Block__Number'># {props.numbers}</h6>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className='Accardion-Block__ContentText'>{props.content}</p>
                        
                        <a className='Accardion-Block__Link' href={props.link} target="_blank" rel="noopener noreferrer">{props.linktext}</a>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
}

export default ContentAccardion;