import Image from 'next/image'
import { ChangeEvent, useEffect, useState } from 'react'
import { AvatarProps } from '../../types/account'
import { Crop, PercentCrop } from 'react-image-crop'
import { cropCenter, cropImage } from '../image/cropImage'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import CropModal from '../image/CropModal'

const Avatar = ({
  avatarSrc,
  avatarSide,
  name,
  register,
  formState,
  options,
}: AvatarProps) => {
  const [src, setSrc] = useState<string>(avatarSrc)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const side: number = avatarSide
  //同じ画像を繰り返し読み込もうとした際に実行されない
  const handleFile = async (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || !event.target.files.length) {
      // alert('ファイルを選択してください。')
      return
    }
    const avatarFile: File = event.target.files[0]

    if (avatarFile.size > 5000000) {
      alert('ファイルサイズは 1MB 以下にしてください.')
      return
    }
    setSrc(URL.createObjectURL(avatarFile))
    URL.revokeObjectURL
    event.preventDefault()
  }

  return (
    <div className='mb-24 h-64 w-64'>
      {src ? (
        <Image
          src={src}
          alt='avatar'
          width={side}
          height={side}
          className={`mb-4 h-64 w-64 rounded-full border-slate-700`}
        />
      ) : (
        <div className={`mb-4 h-64 w-64 rounded-full bg-slate-700`} />
      )}

      <CropModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        src={src}
        setSrc={setSrc}
        modalWidth={360}
        modalHeight={360}
        cropAspect={1 / 1}
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
          className='hidden'
          accept='image/*'
          {...register(name, {
            onChange: (e: ChangeEvent<HTMLInputElement>) => {
              console.log(e)
              handleFile(e).then(() => {
                setIsOpen(true)
              })
            },
          })}
        />
      </label>
    </div>
  )
}

export default Avatar
