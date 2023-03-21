import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { DropZoneProps, RegisterImage } from '../../types/image'
import { loadRegisterImage } from './registerImage'

const DropZone = ({ setRegisterImage }: DropZoneProps) => {
  const onDrop = async (file: File[]) => {
    const image: RegisterImage = await loadRegisterImage(file)
    setRegisterImage(image)
  }
  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    accept: { 'image/png': ['.png', '.jpeg', '.jpg'] },
    onDrop: onDrop,
    noClick: true,
  })

  return (
    <div
      {...getRootProps()}
      className='flex h-56 w-96 items-center justify-center rounded border-2 border-dashed'
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <button type='button' onClick={open}>
          Drag drop some files here, or click to select files
        </button>
      )}
      {/* <button type="button" onClick={open}>Select files</button> */}
    </div>
  )
}

export default DropZone
