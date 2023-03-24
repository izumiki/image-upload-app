import { UseFormGetValues, UseFormSetValue } from 'react-hook-form'

export interface AccountProps {
  id: string
  email: string
  username: string
  profile: string
  avatarSrc: string
}

export type Accounts = {
  id: string
  email: string
  name: string
  profile: string
  avatarSrc: string
  created_at: Date
  updated_at: Date
}

export type AccountFormValues = {
  email: string
  username: string
  profile: string
  avatar_src: string
  avatar_image: Blob | File
}

export type AccountFormProps = {
  label: string
  type: string
  name: 'email' | 'username' | 'profile' | 'avatar_src'
  register: UseFormRegister<AccountFormValues>
  formState: FormState<AccountFormValues>
  options: Object
}

export type AvatarProps = {
  avatarSrc: string
  avatarSide: number
  name: 'avatar_image'
  // setAvatarSrc: () => void
  register: UseFormRegister<AccountFormValues>
  setValue: UseFormSetValue<AccountFormValues>
}
