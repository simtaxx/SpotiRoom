'use client'

import Image from 'next/image'

import styles from './styles.module.scss'
import { authenticate, logout } from '@/api/services/serviceAuthentication'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const Header = () => {
  const [userState, setUserState] = useState<any>(null)

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      setUserState(JSON.parse(user))
    }
  }, [])

  const AuthButton = () => ( !userState
    ? <button className={styles.header__authButton} onClick={authenticate}>
        Log in
      </button>
    : <button className={styles.header__authButton} onClick={logout}>
        Log out
      </button>
  )

  return (
    <header className={styles.header}>
      <Link className={styles.header__title} href='/'>SpotiRoom</Link>
      <div className={styles['header__profile-container']}>
        <AuthButton />
        { userState && <Image src={userState.picture} alt={userState.name} width={50} height={50} /> }
      </div>
    </header>
  )
}

export default Header
