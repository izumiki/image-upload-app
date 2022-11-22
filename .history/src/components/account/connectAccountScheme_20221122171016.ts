import { useUser } from '@supabase/auth-helpers-react'
import { User } from '@supabase/supabase-js'
import { AccountProps, Accounts } from '../../types/account'
import supabase from '../../utils/supabaseClient'
import { AccountFormValues } from './AccountForm'

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
      `,
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
  console.log(data)
  try {
    const { error } = await supabase.from<Accounts>('accounts').update({
      name: data.username,
      profile: data.profile,
    })

    if (error) console.error(error.message)
  } catch (error) {
    console.error(error)
  }
}
