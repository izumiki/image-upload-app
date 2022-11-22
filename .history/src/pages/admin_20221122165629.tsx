import { useUser } from '@supabase/auth-helpers-react'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Account from '../components/account/Account'
import Login from '../components/account/auth/Login'
import Logout from '../components/account/auth/Logout'
import { fetchAccount } from '../components/account/connectAccountScheme'
import styles from '../styles/Home.module.css'
import { AccountProps } from '../types/account'

export default function Admin() {
  const user: User = useUser()
  const [account, setAccount] = useState<AccountProps>()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    if (user) {
      fetchAccount(user).then((res) => {
        setAccount(res)
        console.log('account', res)
        setLoading(false)
      })
    }
  }, [user])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className='mb-12 text-3xl font-bold '>Admin Page</h1>

        {!loading && <Account account={account} />}
      </main>

      <footer className={styles.footer}>
        <Logout />
      </footer>
    </div>
  )
}
