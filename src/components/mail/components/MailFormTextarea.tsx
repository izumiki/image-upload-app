import { FormState, UseFormRegister } from 'react-hook-form'
import { MailFormInputProps } from '../../../types/mail'

const MailFormTextarea = ({
  label,
  type,
  helpText,
  name,
  register,
  errors,
  options,
}: MailFormInputProps) => {
  const error = errors[name]
  return (
    <div className='items-top flex w-full flex-wrap justify-items-center'>
      {options.required ? (
        <label className=' inline h-5 w-1/12 rounded-md bg-red-400 py-0.5 text-center text-xs font-bold text-white'>
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
        rows={6}
        className={`w-3/4 resize-none border-b-[1.5px] px-2 text-lg text-gray-800
        ${
          !error
            ? 'border-black focus:bg-indigo-50 focus:outline-none'
            : ' border-red-600  focus:border-black focus:bg-indigo-50 focus:outline-none'
        }`}
        {...register(name, options)}
      />
      <label className=' inline w-3/12 py-0.5 ' />

      {helpText ? (
        <label className='w-6/12 px-2 py-0.5 text-xs text-slate-500   '>
          {helpText}
        </label>
      ) : (
        <label className='w-6/12 px-2 py-0.5' />
      )}

      {error ? (
        (error.type === 'required' && (
          <label
            className='w-3/12  px-2 text-right text-xs text-red-600  '
            htmlFor={name}
          >
            入力してください
          </label>
        )) ||
        (error.type === 'maxLength' && (
          <label
            className='w-3/12  px-2 text-right text-xs text-red-600  '
            htmlFor={name}
          >
            文字数が多すぎます
          </label>
        ))
      ) : (
        <label className='w-3/12 px-2 py-0.5' />
      )}
    </div>

    // {formState.errors && <p>This field is required</p>}
  )
}

export default MailFormTextarea
