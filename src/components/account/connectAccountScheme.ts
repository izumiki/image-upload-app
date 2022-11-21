import { User } from '@supabase/supabase-js'
import { Account, Accounts } from '../../types/account'
import supabase from '../../utils/supabaseClient'


export const fetchAccount = async (
  user: User
  ) => {
  try {
    const { data, error } = await supabase
      .from<Accounts>('accounts')
      .select('id, email, name, profile, avatar_src, updated_at, created_at')
      .eq('id', user.id)
      .single()

    if (error) throw error
    const account: Account = {
      id: data?.id,
      email: data?.email,
      username: data?.name,
      profile: data?.profile,
      avatarSrc: data?.avatar_src
      }
    return account

  } catch (error) {
    console.error(error)
  }
}