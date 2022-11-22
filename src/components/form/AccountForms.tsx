import { UseFormRegister } from 'react-hook-form'

const AccountForms = (register: UseFormRegister, formState: FormState) => {
  return (
    <Form
      label='名前'
      type='text'
      name='username'
      register={register}
      formState={formState}
    />
  )
}

export default AccountForms
