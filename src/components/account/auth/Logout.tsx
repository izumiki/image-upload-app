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
      className='bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      onClick={() => login()}
    >
      Logout
    </button>
  )
}

export default Logout