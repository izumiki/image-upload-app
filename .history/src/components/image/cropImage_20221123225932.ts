import { useState } from 'react'
import { centerCrop, makeAspectCrop, PercentCrop } from 'react-image-crop'

export const cropCenter = (width: number, height: number, aspect: number) => {
  return centerCrop(
    makeAspectCrop({unit: '%', width: 100}, aspect, width, height), 
      width, 
      height
  )
}

export async function cropImage(
  src: string,
  setSrc: () => void,
  completedCrop: PercentCrop,
) {
  const image: HTMLImageElement = new Image()
  image.src = src
  const croppedImageWidth: number = completedCrop.width * image.width / 100
  const croppedImageHeight: number = completedCrop.height * image.height / 100
  const canvas: HTMLCanvasElement = document.createElement('canvas')
  canvas.width = croppedImageWidth
  canvas.height = croppedImageHeight
  console.log('canvas', canvas)
  const ctx: CanvasRenderingContext2D = canvas.getContext ('2d')
  ctx.drawImage(
    image,
    0,
    0,
    image.width,
    image.height,
    completedCrop.x,
    completedCrop.y,
    croppedImageWidth,
    croppedImageHeight
  )
  const base64Image = canvas.toDataURL('image/jpeg')
  // console.log('image', base64Image)
  canvas.toBlob((blob) => {
    const newSrc = URL.createObjectURL(blob)
    setSrc()
  },'image/jpeg', 0.85)
  // const scaleX = image.naturalWidth / image.width
  // const scaleY = image.naturalHeight / image.height
  // // devicePixelRatio slightly increases sharpness on retina devices
  // // at the expense of slightly slower render times and needing to
  // // size the image back down if you want to download/upload and be
  // // true to the images natural size.
  // const pixelRatio = window.devicePixelRatio
  // // const pixelRatio = 1



  // ctx.scale(pixelRatio, pixelRatio)
  // ctx.imageSmoothingQuality = 'high'

  // const cropX = crop.x * scaleX
  // const cropY = crop.y * scaleY

  // const rotateRads = rotate * TO_RADIANS
  // const centerX = image.naturalWidth / 2
  // const centerY = image.naturalHeight / 2

  // ctx.save()

  // console.log(ctx)

  // ctx.restore()
}