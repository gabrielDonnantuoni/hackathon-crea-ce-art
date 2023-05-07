'use client'

import { useContext } from 'react'

import { styled } from '@mui/material/styles'
import Check from '@mui/icons-material/Check'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import StepButton from '@mui/material/StepButton'
import StepConnector, {
  stepConnectorClasses,
} from '@mui/material/StepConnector'
import { StepIconProps } from '@mui/material/StepIcon'
import { FormContext } from './context'

const Connector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.success.main,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.success.main,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}))

const StepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
  ({ theme, ownerState }) => ({
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
      color: theme.palette.success.main,
    }),
    '& .CustomStepIcon-completedIcon': {
      color: theme.palette.success.main,
      zIndex: 1,
      fontSize: 18,
    },
    '& .CustomStepIcon-circle': {
      width: 16,
      height: 16,
      borderRadius: '50%',
      backgroundColor: 'currentColor',
    },
  }),
)

function CustomStepIcon(props: StepIconProps) {
  const { active, completed, className } = props

  return (
    <StepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className='CustomStepIcon-completedIcon' />
      ) : (
        <div className='CustomStepIcon-circle' />
      )}
    </StepIconRoot>
  )
}

const steps = ['Etapa 1', 'Etapa 2', 'Etapa 3', 'Etapa 4']

interface IProps {
  completed: { [key: number]: boolean }
}

export default function CustomizedStepper({ completed }: IProps) {
  const { activeStep } = useContext(FormContext)
  const handleStep = (step: number) => () => {
    activeStep?.set(step)
  }

  return (
    <Stepper
      alternativeLabel
      activeStep={activeStep?.value}
      connector={<Connector />}
    >
      {steps.map((label, index) => (
        <Step key={label} completed={completed[index]}>
          <StepButton
            color='inherit'
            onClick={handleStep(index)}
            sx={{ zIndex: 5 }}
          >
            <StepLabel StepIconComponent={CustomStepIcon}>{label}</StepLabel>
          </StepButton>
        </Step>
      ))}
    </Stepper>
  )
}
