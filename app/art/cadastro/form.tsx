'use client'

import { useState } from 'react'

import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

import AutoComplete, { IAutoCompleteOption } from '@/art/autocomplete'

import Step1 from '@/art/cadastro/form/step1'
import Stepper from '@/art/cadastro/stepper'

interface IFormInput {
  templateModel: IAutoCompleteOption
  registryType: IAutoCompleteOption
  isMotivatedFromInspection: boolean
  inspectionDocumentNumber?: number
  inspectionDocumentYear?: number

  participation: IAutoCompleteOption
  hiredCompanyId?: string
  finality: IAutoCompleteOption
  observation: string
  classEntity: IAutoCompleteOption
  institutionalAction: IAutoCompleteOption
}

export default function Form() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      templateModel: { label: '', value: '' },
      registryType: { label: '', value: '' },
      isMotivatedFromInspection: false,

      participation: { label: '', value: '' },
      finality: { label: '', value: '' },
      classEntity: { label: '', value: '' },
      observation: '',
      institutionalAction: { label: '', value: '' },
    },
  })
  const [completed, setCompleted] = useState<{ [key: number]: boolean }>({})

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

  return (
    <Box
      component='form'
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{
        mt: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Stepper completed={completed} />
      <Step1 control={control} />
      <Controller
        control={control}
        name='participation'
        render={({ field }) => (
          <AutoComplete
            {...field}
            options={[
              { label: 'Participação 1', value: '1' },
              { label: 'Participação 2', value: '2' },
              { label: 'Participação 3', value: '3' },
            ]}
            label='Participação'
          />
        )}
      />
      <Controller
        control={control}
        name='hiredCompanyId'
        render={({ field }) => (
          <AutoComplete
            {...field}
            options={[
              { label: 'Empresa 1', value: '1' },
              { label: 'Empresa 2', value: '2' },
              { label: 'Empresa 3', value: '3' },
            ]}
            label='Empresa contratada'
          />
        )}
      />
      <Controller
        control={control}
        name='finality'
        render={({ field }) => (
          <AutoComplete
            {...field}
            options={[
              { label: 'Finalidade 1', value: '1' },
              { label: 'Finalidade 2', value: '2' },
              { label: 'Finalidade 3', value: '3' },
            ]}
            label='Finalidade'
          />
        )}
      />
      <Controller
        control={control}
        name='observation'
        render={({ field }) => (
          <TextField
            {...field}
            multiline
            minRows={2}
            aria-label='Observação'
            placeholder='Observação'
            sx={{ minWidth: 300 }}
          />
        )}
      />
      <Controller
        control={control}
        name='classEntity'
        render={({ field }) => (
          <AutoComplete
            {...field}
            options={[
              { label: 'Entidade 1', value: '1' },
              { label: 'Entidade 2', value: '2' },
              { label: 'Entidade 3', value: '3' },
            ]}
            label='Entidade de classe'
          />
        )}
      />
      <Controller
        control={control}
        name='institutionalAction'
        render={({ field }) => (
          <AutoComplete
            {...field}
            options={[
              { label: 'Ação institucional 1', value: '1' },
              { label: 'Ação institucional 2', value: '2' },
              { label: 'Ação institucional 3', value: '3' },
            ]}
            label='Ação institucional'
          />
        )}
      />
    </Box>
  )
}
