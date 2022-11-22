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
  name: string<AccountFormValues>
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
  const registerName = name
  console.log('name', {name})
  const { errors } = formState
  const error= errors[name] 
  console.log('errors', formState.errors)
  return (
    <div className="mb-4">
      <label 
        htmlFor={name} 
        className='block text-gray-700 text-sm font-bold mb-1'
      >
      {label}
      </label>
      <input 
        id={name}
        type={type} 
        className='shadow border rounded w-full py-1 px-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        {...register(name, rules)} 
      />
      {error && <p>{label} を入力してください.</p>}
    </div>

    // {formState.errors && <p>This field is required</p>}
  )
}

export default Form
