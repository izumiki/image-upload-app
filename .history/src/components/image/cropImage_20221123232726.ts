import { useState } from 'react'
import { centerCrop, makeAspectCrop, PercentCrop } from 'react-image-crop'

export const cropCenter = (width: number, height: number, aspect: number) => {
  return centerCrop(
    makeAspectCrop({ unit: '%', width: 100 }, aspect, width, height),
    width,
    height
  )
}

export async function cropImage(
  src: string,
  setSrc: () => void,
  completedCrop: PercentCrop
) {
  const image: HTMLImageElement = new Image()
  image.src = src
  console.log(image.width)
  console.log(completedCrop.width)
  const croppedImageWidth: number = (completedCrop.width * image.width) / 100
  const croppedImageHeight: number = (completedCrop.height * image.height) / 100
  const croppedImageX = (completedCrop.x * image.width) / 100
  const croppedImageY = (completedCrop.y * image.height) / 100
  const canvas: HTMLCanvasElement = document.createElement('canvas')
  image.crossOrigin = 'Anonymous'
  canvas.width = croppedImageWidth
  canvas.height = croppedImageHeight
  console.log('canvas', canvas)
  console.log('completedCrop', completedCrop)
  console.log('width: ', croppedImageWidth)
  console.log('height: ', croppedImageHeight)
  console.log('x: ', croppedImageX)
  console.log('y: ', croppedImageY)
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
  const base64Image = canvas.toDataURL('image/jpeg')
  // console.log('image', base64Image)
  canvas.toBlob(
    (blob) => {
      const newSrc = URL.createObjectURL(blob)
      console.log(newSrc)
      setSrc(newSrc)
    },
    'image/avif',
    0.85
  )
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
