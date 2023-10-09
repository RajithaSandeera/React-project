import React from 'react'
import { Box, Divider, Step, StepLabel, Stepper, Typography } from '@mui/material'


const Stepper = () => {
  return (
    <Box sx={{ width: '100%' }}>
    <Stepper activeStep={props.activeStep} sx={{ padding: 0 }}>
      {props.steps.map((label, index) => {
        const stepProps = {}
        const labelProps = {}
        return (
          <Step sx={{ padding: 0 }} key={label} {...stepProps}>
            <StepLabel {...labelProps}>{label}</StepLabel>
          </Step>
        )
      })}

    </Stepper>
    <Divider sx={{ marginTop: '2rem' }} />
    <React.Fragment>
      <Typography sx={{ mt: 2, mb: 1 }}>{props.activeStep === 0
        ? (props.Personal)
        : (props.activeStep === 1) 
            ? (props.Parents) 
            :(props.activeStep === 2 ?
                (props.Review & Pay) : '')
           }</Typography>
    </React.Fragment>
  </Box>
  )
}

export default Stepper