import { FormState, UseFormRegister } from 'react-hook-form'
import { MailFormInputProps } from '../../../types/mail'

const MailFormTextarea = ({
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
  return (
<div className='flex w-5/6 flex-wrap items-top justify-items-center px-4 '>
      {options.required ? (
        <label className=' inline w-1/12 h-5 rounded-md bg-red-400 py-0.5 text-center text-xs font-bold text-white'>
          必須
        </label>
      ) : (
        <label className=' inline w-1/12 py-0.5 ' />
      )}
      <label
        htmlFor={name}
        className='inline w-2/12 px-2 text-sm font-bold text-slate-700 '
      >
        {label}
      </label>

      <textarea
        id={name}
        type={type}
        maxLength={options.maxLength}
        rows={4}
        className={`w-3/4 border-b-[1.5px] px-2 text-lg text-gray-800 resize-none
        ${
          !error
            ? 'border-black focus:bg-gray-200 focus:outline-none'
            : ' border-red-600  focus:border-black focus:bg-gray-200 focus:outline-none'
        }`}
        {...register(name, options)}
      />
      <label className=' inline w-3/12 py-0.5 ' />

      {helpText ? (
        <label className='px-2 py-0.5 w-6/12 text-xs text-slate-500   '>
        {helpText}
        </label>
      )
        : 
        <label className='px-2 py-0.5 w-6/12' />
      }

      {error ? (

        <label className='px-2 py-0.5 text-xs w-3/12 text-red-600 text-right  '>
        入力してください
        </label>
      )
        : 
        <label className='px-2 py-0.5 w-3/12' />
      }
    </div>

    // {formState.errors && <p>This field is required</p>}
  )
}

export default MailFormTextarea
