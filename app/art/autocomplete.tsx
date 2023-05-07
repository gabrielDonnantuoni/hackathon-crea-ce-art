'use client'

import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

export interface IAutoCompleteOption {
  label: string
  value: string
}

interface IProps {
  options: { label: string; value: string }[]
  label: string
  [key: string]: any
}

export default function Auto({ options, label, ...otherProps }: IProps) {
  return (
    <Autocomplete<{ label: string; value: string }>
      disablePortal
      options={options}
      sx={{ minWidth: 300 }}
      renderInput={(params) => (
        <TextField
          {...{ ...params, ...otherProps }}
          label={label}
          margin='normal'
        />
      )}
    />
  )
}
