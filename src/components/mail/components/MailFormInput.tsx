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
    <div className='flex w-5/6 flex-wrap items-center justify-items-center px-4'>
      {options.required ? (
        <label  htmlFor={name}  className=' inline w-1/12 rounded-md bg-red-400 py-0.5 text-center text-xs font-bold text-white'>
          必須
        </label>
      ) : (
        <label  htmlFor={name}  className=' inline w-1/12  ' />
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
            ? 'border-black focus:bg-gray-200 focus:outline-none'
            : ' border-red-600  focus:bg-gray-200 focus:outline-none'
        }`}
        {...register(name, options)}
      />
      <label  htmlFor={name}  className=' inline w-3/12' />

      {helpText ? (
        <label  htmlFor={name}  className='px-2  w-6/12 text-xs text-slate-500   '>
        {helpText}
        </label>
      )
        : 
        <label  htmlFor={name}  className='px-2 h-4  w-6/12' />
      }

      {error ? (
        <label className='px-2  text-xs w-3/12 text-red-600 text-right  ' htmlFor={name}>
        入力してください 
        </label>
      )
        : 
        <label className='px-2 h-4 w-3/12'            htmlFor={name} />
      }
    </div>

    // {formState.errors && <p>This field is required</p>}
  )
}

export default MailFormInput
