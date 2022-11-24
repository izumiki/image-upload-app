import { useState } from 'react'
import ReactCrop, { PercentCrop } from 'react-image-crop'
import { cropCenter, cropImage } from './cropImage'
import Modal from 'react-modal'
import Image from 'next/image'

export type CropModalProps = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  modalWidth: number
  modalHeight: number
  src: string
  setSrc: (src: string) => void
  // imageWidth: number,
  // imageHeight: number,
  cropAspect: number
  cropCircle?: boolean
}

const CropModal = ({
  isOpen,
  setIsOpen,
  modalWidth,
  modalHeight,
  src,
  setSrc,
  // imageWidth,
  // imageHeight,
  cropAspect,
  cropCircle = false,
}: CropModalProps) => {
  const [crop, setCrop] = useState<PercentCrop>(cropCenter(src, 90, cropAspect))
  const [completedCrop, setCompletedCrop] = useState<PercentCrop>(
    cropCenter(src, 90, cropAspect)
  )
  // console.log('crop', crop)

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      contentLabel='Crop Modal'
      className='mt-6 flex flex-auto flex-col items-center justify-center gap-6 
      border-white/0 bg-white/0'
    >
      <ReactCrop
        crop={crop}
        aspect={cropAspect}
        onChange={(_, percentCrop) => {
          setCrop(percentCrop)
        }}
        onComplete={(_, percentCrop) => {
          setCompletedCrop(percentCrop)
        }}
        className={cropCircle ? ' border-blue-600 ' : 'border-blue-600'}
        circularCrop={cropCircle}
      >
        <Image
          src={src}
          alt='cropImage'
          width={modalWidth}
          height={modalHeight}
        />
      </ReactCrop>
      <div className='flex flex-auto flex-row  justify-between gap-36'>
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
          onClick={() => {
            cropImage(src, setSrc, completedCrop)
            setIsOpen(false)
          }}
          className={`
            hover: mb-8 flex h-auto w-24 cursor-pointer justify-center 
            rounded bg-teal-500 py-2 px-2 
            font-bold text-white
            hover:bg-teal-700 focus:outline-none
          `}
        >
          OK
        </button>
      </div>
    </Modal>
  )
}

export default CropModal
