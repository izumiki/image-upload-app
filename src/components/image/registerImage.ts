import { RegisterImage } from '../../types/image'

export const loadRegisterImage = async (
  fileList: FileList | File[]
): Promise<RegisterImage> => {
  const file = fileList[0]
  const fileName: string = file.name
  const fileSize: string = convertFileSize(file.size)
  const imageFile: HTMLImageElement = await getImageElement(file)

  const image: RegisterImage = {
    src: imageFile.src,
    name: fileName,
    size: fileSize,
    width: imageFile.width,
    height: imageFile.height,
  }
  return image
}

export const getImageElement = async (
  file: File
): Promise<HTMLImageElement> => {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image()
    image.onload = () => {
      URL.revokeObjectURL
      resolve(image)
    }
    image.onerror = (error) => reject(error)

    image.src = URL.createObjectURL(file)
  })
}

export const convertFileSize = (size: number): string => {
  if (0 < size && size <= 1024) return `${size} B`
  else if (1024 < size && size < 1024 ** 2)
    return `${Math.floor(size / 1024)} KB`
  else if (1024 ** 2 < size && size < 1024 ** 3)
    return `${Math.floor(size / 1024 ** 2)} MB`
  else return 'error'
}
