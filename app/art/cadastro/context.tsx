'use client'

import { Dispatch, SetStateAction, createContext, useState } from 'react'

interface IContext {
  activeStep: {
    value: number
    set: Dispatch<SetStateAction<number>>
  }
}

export const FormContext = createContext<Partial<IContext>>({})

export default function Component({ children }: { children: React.ReactNode }) {
  const [activeStep, setActiveStep] = useState(0)

  const context = {
    activeStep: { value: activeStep, set: setActiveStep },
  }

  return <FormContext.Provider value={context}>{children}</FormContext.Provider>
}
