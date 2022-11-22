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
  const registerName = name
  console.log('name', name)
  const { errors } = formState
  const error = errors[name]
  return (
    <div className='mb-4'>
      <label
        htmlFor={name}
        className='mb-1 block text-sm font-bold text-gray-700'
      >
        {label}
      </label>
      <input
        id={name}
        type={type}
        className='focus:shadow-outline w-full rounded border py-1 px-12 leading-tight text-gray-700 shadow focus:outline-none'
        {...register(name, rules)}
      />
      {error && <p>{label} を入力してください.</p>}
    </div>

    // {formState.errors && <p>This field is required</p>}
  )
}

export default Form
