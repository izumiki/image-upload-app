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
    <div className="mb-4">
      <label 
        htmlFor={label} 
        className='block text-gray-700 text-sm font-bold mb-2'
      >
      {label}
      </label>
      <input 
        id={name}
        type={type} 
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        {...register(name, rules)} 
      />
      {formState.errors.{name} && <p>This field is required</p>}
    </div>

    // {formState.errors && <p>This field is required</p>}
  )
}

export default Form
