import { AccountFormProps } from '../../types/account'

const AccountLargeForm = ({
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
    <div className=''>
      <label
        htmlFor={name}
        className='mb-2 block text-sm font-bold text-gray-700'
      >
        {label}{' '}
        {error && (
          <span className='inline text-red-500'>入力してください!</span>
        )}
      </label>
      <textarea
        id={name}
        type={type}
        className={`mb-2 block h-48 w-64 resize-none rounded border p-2 text-gray-800 shadow 
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

export default AccountLargeForm
