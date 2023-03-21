import supabase from '../../../utils/supabaseClient'
import { useRouter } from 'next/router'

const Logout = () => {
  const router = useRouter()

  const logout = async () => {
    
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      router.push('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <button
      className='rounded bg-red-500 py-2 px-4 font-bold text-white hover:bg-red-700'
      onClick={() =>logout()}
    >
      Logout
    </button>
  )
}

export default Logout
