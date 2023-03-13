import { useCallback, useEffect, useState } from 'react'
import Modal from 'react-modal'
import {
  UseFormRegister,
  FormState,
  FieldErrors,
  useForm,
  UseFormGetValues,
} from 'react-hook-form'
import { MailFormValues } from '../../../types/mail'
import { sendMail } from '../sendMail'
import MailForm from '../MailForm'
import MailFormItem from './MailFormItem'
import Spinner from '../../Sppiner'

export type ConfirmModalProps = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  modalWidth: number
  modalHeight: number
  // register: UseFormRegister<MailFormValues>
  getValues: UseFormGetValues<MailFormValues>
}

const ConfirmModal = ({
  isOpen,
  setIsOpen,
  modalWidth,
  modalHeight,
  getValues,
}: ConfirmModalProps) => {

  const inputMailParams = () => {
    const params: MailFormValues = {
      client: getValues('client'),
      clientEmail: getValues('clientEmail'),
      clientWebsite: getValues('clientWebsite'),
      title: getValues('title'),
      details: getValues('details'),
      budget: getValues('budget'),
      deliveryDate: getValues('deliveryDate'),
      isPublic: getValues('isPublic') ? '公開を望まない' : '公開してもよい',
    }
    sendMail(params)
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      contentLabel='Crop Modal'
      className='mt-6 flex flex-auto flex-col items-center justify-center gap-6 
      border-white bg-white'
    >
      <div>

        <MailFormItem
          label={'お名前 : '}
          name={getValues('client')}
        />

        <MailFormItem
          label={'email : '}
          name={getValues('clientEmail')}
        />

        <MailFormItem
          label={'件名 : '}
          name={getValues('title')}
        />

        <MailFormItem
          label={'詳細 : '}
          name={getValues('details')}
        />


      </div>

      <div className='flex flex-auto flex-row  justify-between gap-36'>
        {/* <div>
          getValues('clientEmail')
        </div> */}
        <button
          onClick={() => {
            setIsOpen(false)
          }}
          className={`
            hover: mb-8 flex h-auto w-24 cursor-pointer justify-center 
            rounded bg-red-400 p-2 
            font-bold text-white
            hover:bg-red-600 focus:outline-none
          `}
        >
          Cancel
        </button>
        <button
          type='submit'
          onClick={() => {
            inputMailParams()
            setIsOpen(false)
          }}
          className='mt-6 w-1/3 rounded bg-teal-900 py-2 px-4 font-bold text-white
            hover:bg-teal-700 focus:outline-none'
        >
          送信
        </button>
      </div>
      {/* </form> */}
    </Modal>
  )
}

export default ConfirmModal
