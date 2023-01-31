import { FormState, UseFormRegister } from 'react-hook-form'
import { MailFormInputProps } from '../../../types/mail'

const MailFormInput = ({
  label,
  type,
  helpText,
  name,
  register,
  formState,
  options,
}: MailFormInputProps) => {
  const { errors } = formState
  const error = errors[name]
  // const required = options.required
  return (
    <div className='flex w-full flex-wrap items-center justify-items-center'>
      {options.required ? (
        <label
          htmlFor={name}
          className=' inline w-1/12 rounded-md bg-red-400 py-0.5 text-center text-xs font-bold text-white'
        >
          必須
        </label>
      ) : (
        <label htmlFor={name} className=' inline w-1/12  ' />
      )}
      <label
        htmlFor={name}
        className='inline w-2/12 px-2 text-sm font-bold text-slate-700 '
      >
        {label}
      </label>

      <input
        id={name}
        type={type}
        maxLength={options.maxLength}
        className={`w-3/4 border-b-[1.5px] px-2 text-lg text-gray-800
        ${
          !error
            ? 'border-black focus:bg-indigo-50 focus:outline-none'
            : ' border-red-600  focus:bg-indigo-50 focus:outline-none'
        }`}
        {...register(name, options)}
      />
      <label htmlFor={name} className=' inline w-3/12' />

      {helpText ? (
        <label
          htmlFor={name}
          className='w-6/12  px-2 text-xs text-slate-500   '
        >
          {helpText}
        </label>
      ) : (
        <label htmlFor={name} className='h-4 w-6/12  px-2' />
      )}

      {error ? (
        <label
          className='w-3/12  px-2 text-right text-xs text-red-600  '
          htmlFor={name}
        >
          入力してください
        </label>
      ) : (
        <label className='h-4 w-3/12 px-2' htmlFor={name} />
      )}
    </div>

    // {formState.errors && <p>This field is required</p>}
  )
}

export default MailFormInput
