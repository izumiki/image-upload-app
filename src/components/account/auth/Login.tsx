import supabase from '../../../utils/supabaseClient'

const Login = () => {
  const login = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: 'http://localhost:3000/admin',
        },
      })
      if (error) throw error
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <button
      className='rounded-full bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700'
      onClick={() => login()}
    >
      Login
    </button>
  )
}

export default Login
