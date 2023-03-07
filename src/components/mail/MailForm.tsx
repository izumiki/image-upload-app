import { useForm } from 'react-hook-form'
import { MailFormValues } from '../../types/mail'
import MailFormInput from './components/MailFormInput'
import { sendMail } from './sendMail'
import MailFormTextarea from './components/MailFormTextarea'
import MailFormCheckbox from './components/MailFormCheckbox'
import ConfirmModal from './components/ConfirmModal'
import { useEffect, useState } from 'react'

const MailForm = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<MailFormValues>()

  return (
    <form
      onSubmit={handleSubmit(() => {
        setIsOpen(true)
      })}
    >
      <div className='flex flex-col items-center  gap-2 bg-gradient-to-br	from-stone-50 via-stone-100  to-stone-200 py-4 px-6 shadow-lg '>
        <h1 className='mb-8 text-3xl font-bold underline decoration-teal-900 decoration-double decoration-1 underline-offset-2'>
          Contact
        </h1>
        <ConfirmModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          modalWidth={720}
          modalHeight={540}
          register={register}
          // handleSubmit={handleSubmit}
          errors={errors}
        />
        <div className='mb-4 flex w-full flex-auto flex-col items-center justify-center justify-items-center gap-2 py-6 px-4 outline-double outline-4 outline-offset-8 outline-teal-900'>
          <MailFormInput
            label='お名前'
            type='text'
            name='client'
            register={register}
            errors={errors}
            options={{ required: true, maxLength: 15 }}
          />
          <MailFormInput
            label='email'
            type='email'
            name='clientEmail'
            register={register}
            errors={errors}
            options={{ required: true }}
          />
          <MailFormInput
            label='website'
            type='url'
            name='clientWebsite'
            register={register}
            errors={errors}
            options={{ required: false }}
          />
          <MailFormInput
            label='件名'
            type='text'
            helpText='最大50字'
            name='title'
            register={register}
            errors={errors}
            options={{ required: true, maxLength: 50 }}
          />
          <MailFormTextarea
            label='詳細'
            type='text'
            helpText='最大500字'
            name='details'
            register={register}
            errors={errors}
            options={{ required: true }}
          />
          <MailFormInput
            label='ご予算'
            type='text'
            name='budget'
            register={register}
            errors={errors}
            options={{ required: false }}
          />
          <MailFormInput
            label='納期'
            type='date'
            name='deliveryDate'
            register={register}
            errors={errors}
            options={{ required: false }}
          />
          <MailFormCheckbox
            label='実績の公開'
            type='chackbox'
            name='isPublic'
            checkboxLabel='公開を望まない'
            register={register}
            errors={errors}
            options={{ required: false }}
          />

          <button
            type='submit'
            // disabled={!Object.keys(dirtyFields).length}
            className='mt-6 w-1/3 rounded bg-teal-900 py-2 px-4 font-bold text-white
            hover:bg-teal-700 focus:outline-none'
            // onClick={() => {
            // console.log('dity', !Object.keys(dirtyFields).length)
            // console.log('errors' && errors)
            // console.log('errorsLength' && Object.keys(errors).length)
            // console.log(getValues('clientEmail'))
            // !Object.keys(errors).length && setIsOpen(true)
            // }}
          >
            確認
          </button>
        </div>
      </div>
    </form>
  )
}

export default MailForm
