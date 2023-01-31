import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import { Alegreya, Klee_One, M_PLUS_2 } from '@next/font/google'

const alegreya = Alegreya({
  subsets: ['latin'],
})

const kleeOne = Klee_One({
  weight: ['400', '600'],
  style: ['normal'],
  subsets: ['latin'],
})

const MPLUS2 = M_PLUS_2({
  subsets: ['latin'],
})


export default function App({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session
}>) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())

  return (
    <main className={alegreya.className}>
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        <Component {...pageProps} />
      </SessionContextProvider>
    </main>
  )
}
