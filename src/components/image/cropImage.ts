import { centerCrop, makeAspectCrop, PercentCrop } from 'react-image-crop'

export const cropCenter = (
  percent: number,
  width: number,
  height: number,
  aspect: number
) => {
  const crop = centerCrop(
    makeAspectCrop(
      {
        unit: '%',
        width: percent,
      },
      aspect,
      width,
      height
    ),
    width,
    height
  )
  return crop
}

export const cropImage = (
  src: string,
  setSrc: (src: string) => void,
  setImg: (img: Blob | File) => void,
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
  const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!
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
    (blob: Blob | null) => {
      if (!blob) return
      const newSrc = URL.createObjectURL(blob)
      setSrc(newSrc)
      setImg(blob)
    },
    'image/jpeg',
    0.85
  )
}
