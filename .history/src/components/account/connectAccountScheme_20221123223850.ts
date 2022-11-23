import { useUser } from '@supabase/auth-helpers-react'
import { User } from '@supabase/supabase-js'
import { AccountProps, Accounts, AccountFormValues } from '../../types/account'
import supabase from '../../utils/supabaseClient'
import { createPath, uploadImage } from '../image/connectSrotage'

export const fetchAccount = async (user: User) => {
  try {
    const { data, error } = await supabase
      .from<Accounts>('accounts')
      .select(
        `
        id, 
        email, 
        name, 
        profile, 
        avatar_src, 
        updated_at, 
        created_at
      `
      )
      .eq('id', user.id)
      .single()

    if (error) throw error
    const account: AccountProps = {
      id: data?.id,
      email: data?.email,
      username: data?.name,
      profile: data?.profile,
      avatarSrc: data?.avatar_src,
    }
    return account
  } catch (error) {
    console.error(error)
  }
}

export const updateAccount = async (data: AccountFormValues) => {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser()
    const userEmail: string = user?.email
    const userStorageDir: string = userEmail.split('@')[0]
    console.log(userStorageDir)
    console.log('data', data)
    console.log(data.avatar_image.length)
    const filePath: string = `${userStorageDir}/${createPath()}`
    const avatarSrc: string = data.avatar_image.length
      ? await uploadImage('avatars', filePath, data.avatar_image[0])
      : undefined

    console.log('avatarSrc', avatarSrc)

    const { error } = await supabase
      .from<Accounts>('accounts')
      .update({
        name: data.username,
        profile: data.profile,
        avatar_src: avatarSrc,
      })
      .eq('email', data.email)

    if (error) throw error
  } catch (error) {
    console.error(error)
  }
}
