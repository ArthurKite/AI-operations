import { createContext, useContext, useState, type ReactNode } from 'react'

interface FormData {
  siren: string
  companyName: string
  turnover: string
  employeeCount: string
  email: string
  notInDifficulty: boolean
  acceptCGU: boolean
}

interface FormContextType {
  formData: FormData
  updateFormData: (fields: Partial<FormData>) => void
  resetFormData: () => void
}

const defaultFormData: FormData = {
  siren: '',
  companyName: '',
  turnover: '',
  employeeCount: '',
  email: '',
  notInDifficulty: false,
  acceptCGU: false,
}

const FormContext = createContext<FormContextType | undefined>(undefined)

export function FormProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState<FormData>(defaultFormData)

  const updateFormData = (fields: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...fields }))
  }

  const resetFormData = () => {
    setFormData(defaultFormData)
  }

  return (
    <FormContext.Provider value={{ formData, updateFormData, resetFormData }}>
      {children}
    </FormContext.Provider>
  )
}

export function useFormContext() {
  const context = useContext(FormContext)
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider')
  }
  return context
}
