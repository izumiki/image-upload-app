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
  register: UseFormRegister<AccountFormValues>
  formState: FormState<AccountFormValues>
  rules: Object
}

const Form = ({
  label,
  type,
  name,
  register,
  formState,
  rules,
}: AccountFormProps) => {
  console.log(formState.errors)
  return (
    <div>
      <label
        htmlFor={label}
        className='mb-2 block text-sm font-bold text-gray-700'
      >
        {label}
      </label>
      <input type={type} {...register(name, rules)} />
      {!formState.errors && <p>This field is required</p>}
    </div>

    // {formState.errors && <p>This field is required</p>}
  )
}

export default Form
