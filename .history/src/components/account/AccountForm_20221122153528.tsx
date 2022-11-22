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
  register: UseFormRegister
  formState: FormState
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
  const { errors } = formState
  console.log('error', formState.error)
  return (
    <div>
      <label
        htmlFor={label}
        className='mb-2 block text-sm font-bold text-gray-700'
      >
        {label}
      </label>
      <input
        id={name}
        type={type}
        className='focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
        {...register(name, rules)}
      />
      {formState.errors && <p>This field is required</p>}
    </div>

    // {formState.errors && <p>This field is required</p>}
  )
}

export default Form
