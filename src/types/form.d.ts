import { FormState, UseFormRegister } from 'react-hook-form'

export type AccountFormValues = {
  email: string
  username: string
  profile: string
  avatar_src: string
  avatar_image: FileList
}

export type AccountFormProps = {
  label: string
  type: string
  name: string
  register: UseFormRegiste
  formState: FormState
  rules: Object
}
