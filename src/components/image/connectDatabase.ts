import { v4 as uuidv4 } from 'uuid'
import supabase from '../../utils/supabaseClient'

export const uploadImage = async (
  bucket: string,
  filePath: string,
  file: File | Blob,
) => {
  try {
    const { data: fileData, error } = await supabase.storage
      .from(bucket)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false,
      })

    if (error) throw error

    const imageKey = fileData.path

    const { data: publicSrc } = supabase.storage
      .from(bucket)
      .getPublicUrl(imageKey)

    return publicSrc.publicUrl
  } catch (error) {
    console.error(error)
  }
}

export const createPath = () => {
  const uuid: string = uuidv4()
  const filePath: string = uuid.split('-').join('')
  return filePath
}
