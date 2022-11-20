import supabase from '../../utils/supabaseClient'

const Login = () => {
  const login = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
        redirectTo: '/index'
      }}) 
      if (error) throw error
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <button
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
      onClick={() => login()}
    >
      Login
    </button>
  )
}

export default Login