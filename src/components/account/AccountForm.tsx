import { FormState, UseFormRegister } from 'react-hook-form'
import { AccountFormProps } from '../../types/account'

const Form = ({
  label,
  type,
  name,
  register,
  formState,
  options,
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
          <span className='inline text-red-500'>入力してください!</span>
        )}
      </label>
      <input
        id={name}
        type={type}
        className={`w-full rounded border py-2 px-4 text-gray-800 shadow 
        ${
          error
            ? 'border-red-400 focus:outline-none focus:ring focus:ring-red-400'
            : 'focus:outline-none focus:ring focus:ring-teal-200'
        }`}
        {...register(name, options)}
      />
    </div>

    // {formState.errors && <p>This field is required</p>}
  )
}

export default Form
