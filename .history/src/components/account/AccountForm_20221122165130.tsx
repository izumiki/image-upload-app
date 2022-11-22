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
  const error = errors[name]
  return (
    <div className='mb-4'>
      <label
        htmlFor={name}
        className='mb-1 block text-sm font-bold text-gray-700'
      >
        {label}{' '}
        {error && (
          <span className='inline text-red-500'>
            !{label} を入力してください.
          </span>
        )}
      </label>
      <input
        id={name}
        type={type}
        className='focus:shadow-outline w-full rounded border py-2 px-12 text-gray-700 shadow focus:outline-none'
        {...register(name, rules)}
      />
    </div>

    // {formState.errors && <p>This field is required</p>}
  )
}

export default Form
