import { useState } from 'react'
import ReactCrop, { PercentCrop } from 'react-image-crop'
import { cropCenter, cropImage } from './cropImage'
import Modal from 'react-modal'
import Image from 'next/image'

export type CropModalProps = {
  isOpen: boolean
  setIsOpen: () => void
  src: string
  setSrc: () => void
  modalWidth: number
  modalHeight: number
  cropAspect: number
}

const CropModal = ({
  isOpen,
  setIsOpen,
  src,
  setSrc,
  modalWidth,
  modalHeight,
  cropAspect,
}: CropModalProps) => {
  const [crop, setCrop] = useState<PercentCrop>(
    cropCenter(450, 450, cropAspect)
  )
  const [completedCrop, setCompletedCrop] = useState<PercentCrop>(
    cropCenter(450, 450, cropAspect)
  )

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      contentLabel='Crop Modal'
      className='flex justify-center gap-4'
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
      >
        <Image
          src={src}
          alt='cropImage'
          width={modalWidth}
          height={modalHeight}
          className='justify-center'
        />
      </ReactCrop>
      <button
        onClick={() => {
          cropImage(src, setSrc, completedCrop)
          setIsOpen(false)
        }}
        className={`
          hover: mb-8 flex h-12 w-64  cursor-pointer justify-center 
          rounded bg-teal-500 py-2.5 px-2 
          font-bold text-white
          hover:bg-teal-700 focus:outline-none
         `}
      >
        OK
      </button>
    </Modal>
  )
}

export default CropModal
