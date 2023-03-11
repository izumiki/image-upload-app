import { useState } from 'react'
import Modal from 'react-modal'
import {
  UseFormRegister,
  FormState,
  FieldErrors,
  useForm,
} from 'react-hook-form'
import { MailFormValues } from '../../../types/mail'
import { sendMail } from '../sendMail'

export type ConfirmModalProps = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  modalWidth: number
  modalHeight: number
  params: any
}

const ConfirmModal = ({
  isOpen,
  setIsOpen,
  modalWidth,
  modalHeight,
  params,
}: ConfirmModalProps) => {
  const { getValues } = useForm<MailFormValues>()

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      contentLabel='Crop Modal'
      className='mt-6 flex flex-auto flex-col items-center justify-center gap-6 
      border-white bg-white'
    >
      {/* <form onSubmit={handleSubmit(sendMail)}> */}

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
            sendMail(params)
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
