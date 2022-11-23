import Image from 'next/image'
import { ChangeEvent, useState } from 'react'
import { AvatarProps } from '../../types/account'
import { Crop, PercentCrop } from 'react-image-crop'
import { cropCenter, cropImage } from '../image/cropImage'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'

const Avatar = ({
  avatarSrc,
  avatarSide,
  name,
  register,
  formState,
  options,
}: AvatarProps) => {
  const [src, setSrc] = useState<string>(avatarSrc)
  const [crop, setCrop] = useState<PercentCrop>(cropCenter(450, 450, 1 / 1))
  const [completedCrop, setCompletedCrop] = useState<PercentCrop>(
    cropCenter(450, 450, 1 / 1)
  )
  const side: number = avatarSide
  const aspect = 1 / 1

  const handleFile = async (event: ChangeEvent<HTMLInputElement>) => {
    if ((!event.target.files || !event.target.files.length) && !src) {
      alert('ファイルを選択してください。')
      return
    }
    const avatarFile = event.target.files[0]

    if (avatarFile.size > 5000000) {
      alert('ファイルサイズは 1MB 以下にしてください.')
      return
    }
    setSrc(URL.createObjectURL(avatarFile))
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
          {...register(name, { onChange: handleFile })}
        />
      </label>

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
    </div>
  )
}

export default Avatar
