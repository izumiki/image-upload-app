import { centerCrop, makeAspectCrop, PercentCrop } from 'react-image-crop'

export const cropCenter = (src: string, percent: number, aspect: number) => {
  const image = new Image()
  image.src = src
  image.onload
  const width = image.naturalWidth
  const height = image.naturalHeight
  console.log('image', image)
  console.log('width', width)
  return centerCrop(
    makeAspectCrop({ unit: '%', width: percent }, aspect, width, height),
    width,
    height
  )
}

export const cropImage = (
  src: string,
  setSrc: (src: string) => void,
  completedCrop: PercentCrop
) => {
  const image: HTMLImageElement = new Image()
  image.src = src
  const croppedImageWidth: number = (completedCrop.width * image.width) / 100
  const croppedImageHeight: number = (completedCrop.height * image.height) / 100
  const croppedImageX = (completedCrop.x * image.width) / 100
  const croppedImageY = (completedCrop.y * image.height) / 100
  const canvas: HTMLCanvasElement = document.createElement('canvas')
  // console.log('crossOrigin', image.crossOrigin) // crossOrigin設定 なんとかする.
  canvas.width = croppedImageWidth
  canvas.height = croppedImageHeight
  const ctx: CanvasRenderingContext2D = canvas.getContext('2d')
  ctx.drawImage(
    image,
    croppedImageX,
    croppedImageY,
    croppedImageWidth,
    croppedImageHeight,
    0,
    0,
    croppedImageWidth,
    croppedImageHeight
  )

  canvas.toBlob(
    (blob: Blob) => {
      const newSrc = URL.createObjectURL(blob)
      setSrc(newSrc)
    },
    'image/jpeg',
    0.85
  )
}

// export const getWidth = (src: string) => {
//   const image: HTMLImageElement  = new Image()
//   image.src = src

//   return image.width
// }

// export const getHeight = (src: string) => {
//   console.log(src)
//   const image: HTMLImageElement  = new Image()
//   image.src = src
//   console.log('image',image)
//   console.log('height',image.height)
//   return image.height
// }
