import { useState } from 'react'
import ReactCrop, { PercentCrop } from 'react-image-crop'
import { cropCenter } from './cropImage'
import Modal from 'react-modal'

export type CropModalProps = (
  isOpen: boolean,
  setIsOpen: () => void,
  src: string,
  setSrc: () => void,
  aspect: number
)

const CropModal = ({
  isOpen, setIsOpen,
  src, setSrc,
  aspect
}: CropModalProps) => {
  const [crop, setCrop] = useState<PercentCrop>(cropCenter(450, 450, aspect))
  const [completedCrop, setCompletedCrop] = useState<PercentCrop>(
    cropCenter(450, 450, 1 / 1)
  )

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}>
      <ReactCrop
        crop={crop}
        aspect={aspect}
        onChange={(_, percentCrop) => {
          setCrop(percentCrop)
        }}
        onComplete={(_, percentCrop) => {
          setCompletedCrop(percentCrop)
        }}>
        <img src={src} />
      </ReactCrop>
      <button
        onClick={() => {
          console.log(completedCrop)
          cropImage(src, setSrc, completedCrop)
        }}
        className={`
          hover: mb-8 flex h-12 w-64  cursor-pointer justify-center 
          rounded bg-teal-500 py-2.5 px-2 
          font-bold text-white
          hover:bg-teal-700 focus:outline-none
         `}>
        OK
      </button>
    </Modal>
  )
}

export default CropModal