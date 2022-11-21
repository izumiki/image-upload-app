import { useEffect } from 'react'
import { User, useUser } from '@supabase/auth-helpers-react'
import { fetchAccount } from './connectAccountScheme'
import supabase from '../../utils/supabaseClient'


const Account = () => {
  const user: User = useUser()

  useEffect(() => {
    if (user) {
      console.log('user', user)
      fetchAccount(user)
      .then((res) => {
        console.log(res)
      })
    }
  }, [user])

  return (
    <p>admin</p>
  )
}

export default Account

