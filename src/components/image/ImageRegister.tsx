import { useEffect, useState } from 'react'
import { RegisterImage } from '../../types/image'
import DropZone from './DropZone'

const ImageRegister = () => {
  const [registerImage, setRegisterImage] = useState<RegisterImage>()
  useEffect(() => {
    if (registerImage) {
      console.log(registerImage)
    }
  }, [registerImage])
  return (
    <DropZone
      // registerImage={registerImage}
      setRegisterImage={setRegisterImage}
    />
  )
}

export default ImageRegister
