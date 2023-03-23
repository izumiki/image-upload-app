import Image from 'next/image'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { AvatarProps } from '../../types/account'
import 'react-image-crop/dist/ReactCrop.css'
import CropModal from '../image/CropModal'
import { loadRegisterImage } from '../image/registerImage'
// import { getImageSide } from '../image/cropImage'
// import { getHeight, getWidth } from '../image/cropImage'

const Avatar = ({
  avatarSrc,
  avatarSide,
  name,
  register,
  options,
}: AvatarProps) => {
  const [src, setSrc] = useState<string>(avatarSrc)
  const [newSrc, setNewSrc] = useState<string>(avatarSrc)
  const [imageWidth, setImageWidth] = useState<number>(5)
  const [imageHeight, setImageHeight] = useState<number>(5)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const side: number = avatarSide

  const handleFile = async (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || !event.target.files.length) {
      event.preventDefault()
      return
    }
    const avatarFile: File = event.target.files[0]

    if (avatarFile.size > 1000000) {
      alert('ファイルサイズは 1MB 以下にしてください.')
      event.preventDefault()
      throw Error
    }
    // const url: string = URL.createObjectURL(avatarFile)
    const image = await loadRegisterImage(avatarFile)
    setImageWidth(image.width)
    setImageHeight(image.height)
    setNewSrc(image.src)
    console.log(image)
    event.target.value = ''
  }

  return (
    <div className='mb-24 h-64 w-64'>
      {/* {src ? (
        <Image
          src={src}
          alt='avatar'
          width={side}
          height={side}
          className={`mb-4 h-64 w-64 rounded-full border-slate-700`}
        />
      ) : (
        <div className={`mb-4 h-64 w-64 rounded-full bg-slate-700`} />
      )} */}

      <CropModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        src={src}
        setSrc={setSrc}
        newSrc={newSrc}
        setNewSrc={setNewSrc}
        imageWidth={imageWidth}
        imageHeight={imageHeight}
        cropAspect={1 / 1}
        cropCircle={true}
      />

      <label
        htmlFor={name}
        className={`
          hover: mb-8 flex h-12 w-64  cursor-pointer justify-center 
          rounded bg-teal-500 py-2.5 px-2 
          font-bold text-white
          hover:bg-teal-700 focus:outline-none
         `}
      >
        Upload File
        <input
          type='file'
          id={name}
          ref={useRef<HTMLInputElement>()}
          className='hidden'
          accept='image/*'
          {...register(name, {
            onChange: (e: ChangeEvent<HTMLInputElement>) => {
              handleFile(e).then(() => {
                setIsOpen(true)
                e.preventDefault()

                // setValue('avatar_image', res)
              })
            },
          })}
        />
      </label>
    </div>
  )
}

export default Avatar
