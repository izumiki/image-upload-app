import { FormState, UseFormRegister } from 'react-hook-form'
import { MailFormCheckboxProps, MailFormInputProps } from '../../../types/mail'

const MailFormCheckbox = ({
  label,
  checkboxLabel,
  name,
  register,
  errors,
  options,
}: MailFormCheckboxProps & {}) => {
  // const { errors } = formState
  const error = errors[name]
  return (
    <div className='flex w-full flex-wrap '>
      <label htmlFor={name} className=' inline w-1/12  ' />
      <label
        htmlFor={label}
        className='mr-4 mb-2 text-sm font-bold text-gray-700'
      >
        {label}
      </label>
      <input
        id={checkboxLabel}
        type='checkbox'
        {...register(name, options)}
        className='mb-1.5 accent-teal-600'
      />
      <label
        htmlFor={checkboxLabel}
        className='px-2 text-sm font-bold text-gray-700'
      >
        {checkboxLabel}
      </label>
    </div>
    // {formState.errors && <p>This field is required</p>}
  )
}

export default MailFormCheckbox
