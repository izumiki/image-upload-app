import supabase from '../../../utils/supabaseClient'

const Login = () => {
  const login = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: 'https://image-upload-app.vercel.app/admin',
        },
      })
      if (error) throw error
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <button
      className='rounded-full bg-teal-500 py-2 px-4 font-bold text-white hover:bg-teal-700'
      onClick={() => login()}
    >
      Login
    </button>
  )
}

export default Login
