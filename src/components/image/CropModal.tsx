import { useEffect, useState } from 'react'
import ReactCrop, { PercentCrop } from 'react-image-crop'
import { cropCenter, cropImage } from './cropImage'
import Modal from 'react-modal'
import Image from 'next/image'
import Spinner from '../Spinner'

export type CropModalProps = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  src: string
  setSrc: (src: string) => void
  newSrc: string
  setNewSrc: (src: string) => void
  imageWidth: number
  imageHeight: number
  cropAspect: number
  cropCircle?: boolean
}

const CropModal = ({
  isOpen,
  setIsOpen,
  src,
  setSrc,
  newSrc,
  setNewSrc,
  // setValue,
  imageWidth,
  imageHeight,
  cropAspect,
  cropCircle = false,
}: CropModalProps) => {
  const [crop, setCrop] = useState<PercentCrop>(
    cropCenter(100, imageWidth, imageHeight, cropAspect)
  )
  const [completedCrop, setCompletedCrop] = useState<PercentCrop>(
    cropCenter(100, imageWidth, imageHeight, cropAspect)
  )
  useEffect(() => {
    setCrop(cropCenter(100, imageWidth, imageHeight, cropAspect))
    setCompletedCrop(cropCenter(100, imageWidth, imageHeight, cropAspect))
  }, [imageWidth, imageHeight, cropAspect])

  return (
    <Modal
      isOpen={isOpen}
      // onRequestClose={() => setIsOpen(false)}
      contentLabel='Crop Modal'
      className='flex h-full w-full flex-auto flex-col items-center justify-center gap-6 bg-white/0 
      py-12'
      overlayClassName='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
      ariaHideApp={false}
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
        circularCrop={cropCircle}
      >
        <Image
          src={newSrc}
          alt='cropImage'
          width={540}
          height={540}
          className={`${imageWidth >= imageHeight ? 'w-[540]' : 'h-[540]'}`}
        />
      </ReactCrop>
      <div className='flex flex-auto flex-row  justify-between gap-36'>
        <button
          onClick={() => {
            setIsOpen(false)
          }}
          className={`
            flex h-10 w-24 cursor-pointer justify-center 
            rounded bg-red-400 p-2 
            font-bold text-white
            hover:bg-red-600 focus:outline-none
          `}
        >
          Cancel
        </button>
        <button
          onClick={() => {
            cropImage(newSrc, setSrc, completedCrop)
            setIsOpen(false)   
          }}
          className={`
            flex h-10 w-24 cursor-pointer justify-center 
            rounded bg-teal-500 p-2 
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
