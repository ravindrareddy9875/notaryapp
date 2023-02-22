import React,{useEffect,useState} from 'react'
import '../Styles/StepperPage.css'
import { MdExpandLess } from 'react-icons/md';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';



const StepperPage = (props) => {
  const count=props.count


  const steps = [
    '','',''
  ];

  return (
    <div>
        <div className='StepperHeader'>
            <MdExpandLess className='BackIcon'/>
            <p className='Request'>New Appointment Request</p>
        </div>
        <p className='SubContent'>Same great coverage for less</p>
   
    <Box className="Stepper">
      <Stepper activeStep={count-1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
    
    </div>
  )
}

export default StepperPage