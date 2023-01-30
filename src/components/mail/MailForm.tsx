import { useForm } from 'react-hook-form'
import { MailFormValues } from '../../types/mail'
import MailFormInput from './components/MailFormInput'
import { sendMail } from './sendMail'
import MailFormTextarea from './components/MailFormTextarea'
import MailFormCheckbox from './components/MailFormCheckbox'

const MailForm = () => {
  const { register, handleSubmit, formState } = useForm<MailFormValues>()

  return (
    <form onSubmit={handleSubmit(sendMail)}>
      <h1 className='mb-8 text-3xl font-bold '>Contact</h1>

      <div className=''>
        <div className='flex flex-auto flex-col items-center justify-center justify-items-center gap-2'>
          <MailFormInput
            label='お名前'
            type='text'
            name='client'
            register={register}
            formState={formState}
            options={{ required: true, maxLength: 50 }}
          />
          <MailFormInput
            label='email'
            type='email'
            name='clientEmail'
            register={register}
            formState={formState}
            options={{ required: true }}
          />
          <MailFormInput
            label='website'
            type='url'
            name='clientWebsite'
            register={register}
            formState={formState}
            options={{ required: false }}
          />
          <MailFormInput
            label='件名'
            type='text'
            helpText='最大50字'
            name='title'
            register={register}
            formState={formState}
            options={{ required: true, maxLength: 50 }}
          />
          <MailFormTextarea
            label='詳細'
            type='text'
            helpText='最大500字'
            name='details'
            register={register}
            formState={formState}
            options={{ required: true }}
          />
          <MailFormInput
            label='ご予算'
            type='text'
            name='budget'
            register={register}
            formState={formState}
            options={{ required: false }}
          />
          <MailFormInput
            label='納期'
            type='date'
            name='deliveryDate'
            register={register}
            formState={formState}
            options={{ required: false }}
          />
          <MailFormCheckbox
            label='実績の公開'
            type='chackbox'
            name='isPublic'
            checkboxLabel='公開を望まない'
            register={register}
            formState={formState}
            options={{ required: false }}
          />

          <button
            type='submit'
            className='w-1/3 rounded bg-teal-500 py-2 px-4 font-bold text-white
              hover:bg-teal-700 focus:outline-none'
          >
            送信
          </button>
        </div>
      </div>
    </form>
  )
}

export default MailForm
