import { FieldErrors, RegisterOptions } from 'react-hook-form'

export type MailFormValues = {
  client: string
  clientEmail: string
  clientWebsite: string
  title: string
  details: string
  budget: string
  deliveryDate: string
  isPublic: boolean
}

// type RadioButtonOption = {
//   number: string
//   label: string
// }

export type MailFormInputProps = {
  label: string
  type?: string
  helpText?: string
  // option?: RadioButtonOpition[]
  name:
    | 'client'
    | 'clientEmail'
    | 'clientWebsite'
    | 'title'
    | 'details'
    | 'budget'
    | 'deliveryDate'
    | 'isPublic'
  register: UseFormRegister<MailFormValues>
  errors: FieldErrors<MailFormValues>
  options: RegisterOptions
}

export type MailFormCheckboxProps = MailFormInputProps & {
  checkboxLabel: string
}
