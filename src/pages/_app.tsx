import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import { Alegreya, Klee_One, M_PLUS_1_Code, Murecho } from '@next/font/google'

const alegreya = Alegreya({
  subsets: ['latin'],
})

const kleeOne = Klee_One({
  weight: ['400', '600'],
  style: ['normal'],
  subsets: ['latin'],
})

const MPLUS1Code = M_PLUS_1_Code({
  subsets: ['latin'],
})

const murecho = Murecho({
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
    <main className={murecho.className}>
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        <Component {...pageProps} />
      </SessionContextProvider>
    </main>
  )
}
