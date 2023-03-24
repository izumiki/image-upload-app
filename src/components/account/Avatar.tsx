import Image from 'next/image'
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react'
import { AvatarProps } from '../../types/account'
import 'react-image-crop/dist/ReactCrop.css'
import CropModal from '../image/CropModal'
import { loadRegisterImage } from '../image/registerImage'
import Spinner from '../Spinner'

const Avatar = ({
  avatarSrc,
  avatarSide,
  name,
  register,
  setValue,
}: AvatarProps) => {
  const [src, setSrc] = useState<string>(avatarSrc)
  const [newSrc, setNewSrc] = useState<string>(avatarSrc)
  const [img, setImg] = useState<Blob | File>()
  const [imageWidth, setImageWidth] = useState<number>(384)
  const [imageHeight, setImageHeight] = useState<number>(384)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>()
  const side: number = avatarSide

  useEffect(() => {
    if (img) setValue(name, img)
  }, [img])

  const handleFile = async (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || !event.target.files.length) {
      event.preventDefault()
      return
    }
    const avatarFile: FileList = event.target.files

    if (avatarFile[0].size > 1000000) {
      alert('ファイルサイズは 1MB 以下にしてください.')
      event.preventDefault()
      throw Error
    }
    // const url: string = URL.createObjectURL(avatarFile)
    const image = await loadRegisterImage(avatarFile)
    setImageWidth(image.width)
    setImageHeight(image.height)
    setNewSrc(image.src)
    event.target.value = ''
  }

  if (loading) return <Spinner />

  return (
    <div className='flex w-96 flex-col items-center'>
      <CropModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setSrc={setSrc}
        setImg={setImg}
        newSrc={newSrc}
        imageWidth={imageWidth}
        imageHeight={imageHeight}
        cropAspect={1 / 1}
        cropCircle={true}
      />
      {src ? (
        <Image
          src={src}
          alt='avatar'
          width={side}
          height={side}
          className={`mb-4 h-96 w-96 rounded-full border-slate-700`}
        />
      ) : (
        <div className={`mb-4 h-96 w-96 rounded-full bg-slate-700`} />
      )}

      <label
        htmlFor={name}
        className={`
          flex h-12 w-64  cursor-pointer items-start justify-center 
          rounded bg-teal-500 p-3 
          font-bold text-white
          hover:bg-teal-700 focus:outline-none
         `}
      >
        Upload File
        <input
          type='file'
          id={name}
          name={name}
          multiple={false}
          className='hidden'
          accept='image/*'
          // ref={useRef<Blob | File>()}
          {...register(name, {
            value: Blob || File,
            onChange: (e: ChangeEvent<HTMLInputElement>) => {
              handleFile(e).then(() => setIsOpen(true))
            },
          })}
        />
      </label>
    </div>
  )
}

export default Avatar
