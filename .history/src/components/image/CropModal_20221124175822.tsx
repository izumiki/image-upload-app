import { useState } from 'react'
import ReactCrop, { PercentCrop } from 'react-image-crop'
import { cropCenter } from './cropImage'
import Modal from 'react-modal';

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
  const [src, setSrc] = useState<string>(avatarSrc)
  const [crop, setCrop] = useState<PercentCrop>(cropCenter(450, 450, 1 / 1))
  const [completedCrop, setCompletedCrop] = useState<PercentCrop>(
    cropCenter(450, 450, 1 / 1)
  )

  return (
    <Modal>
      <ReactCrop
        crop={crop}
        aspect={aspect}
        onChange={(_, percentCrop) => {
          setCrop(percentCrop)
        }}
        onComplete={(_, percentCrop) => {
          setCompletedCrop(percentCrop)
          console.log('width: ', (percentCrop.width * 600) / 100)
          console.log('height: ', (percentCrop.height * 600) / 100)
          console.log('x: ', (percentCrop.x * 600) / 100)
          console.log('y: ', (percentCrop.y * 600) / 100)
          console.log('completedCrop', percentCrop)
        }}
      >
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
         `}
      >
        OK
      </button>
    </Modal>
  )
}

export default CropModal