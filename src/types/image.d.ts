export type RegisterImage = {
  src: string
  name: string
  size: string
  width: number
  height: number
}

export type DropZoneProps = {
  setRegisterImage: (registerImage: RegisterImage) => void
}
