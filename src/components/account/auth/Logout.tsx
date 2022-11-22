import supabase from '../../../utils/supabaseClient'

const Logout = () => {
  const login = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <button
      className='rounded bg-red-500 py-2 px-4 font-bold text-white hover:bg-blue-700'
      onClick={() => login()}
    >
      Logout
    </button>
  )
}

export default Logout
