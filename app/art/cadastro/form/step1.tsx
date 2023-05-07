'use client'

import { useContext } from 'react'
import { Controller, Control } from 'react-hook-form'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import TextField from '@mui/material/TextField'

import AutoComplete from '@/art/autocomplete'
import { FormContext } from '@/art/cadastro/context'

interface IProps {
  control: Control<any>
}

export default function Component({ control }: IProps) {
  const { activeStep } = useContext(FormContext)

  console.log('activeStep?.value')
  console.log(activeStep?.value)

  return (
    <Box sx={{ display: activeStep?.value === 0 ? 'block' : 'none' }}>
      <Controller
        control={control}
        name='templateModel'
        render={({ field }) => (
          <AutoComplete
            {...field}
            options={[
              { label: 'Modelo 1', value: '1' },
              { label: 'Modelo 2', value: '2' },
              { label: 'Modelo 3', value: '3' },
            ]}
            label='Modelo de documento'
          />
        )}
      />
      <Controller
        control={control}
        name='registryType'
        render={({ field }) => (
          <AutoComplete
            {...field}
            options={[
              { label: 'Tipo 1', value: '1' },
              { label: 'Tipo 2', value: '2' },
              { label: 'Tipo 3', value: '3' },
            ]}
            label='Tipo'
          />
        )}
      />
      <Controller
        control={control}
        name='isMotivatedFromInspection'
        render={({ field }) => (
          <FormControlLabel
            sx={{ minWidth: 300, ml: 0 }}
            label='Motivado por fiscalização'
            control={<Checkbox {...field} />}
          />
        )}
      />
      <Controller
        control={control}
        name='inspectionDocumentNumber'
        render={({ field }) => (
          <TextField
            {...field}
            margin='normal'
            id='inspectionDocumentNumber'
            label='N˚ do documento de fiscalização'
            name='inspectionDocumentNumber'
            type='number'
            sx={{ minWidth: 300 }}
          />
        )}
      />
      <Controller
        control={control}
        name='inspectionDocumentYear'
        render={({ field }) => (
          <TextField
            {...field}
            margin='normal'
            id='inspectionDocumentYear'
            label='Ano do documento de fiscalização'
            name='inspectionDocumentYear'
            type='number'
            sx={{ minWidth: 300 }}
          />
        )}
      />
    </Box>
  )
}
