'use client'

import Image from 'next/image'

import styles from './styles.module.scss'
import { authenticate } from '@/api/services/serviceAuthentication'
import { useEffect, useState } from 'react'

const Header = () => {
  const [userState, setUserState] = useState<any>(null)

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      setUserState(JSON.parse(user))
    }
  }, [])

  return (
    <header className={styles.header}>
      <h2>SpotiRoom</h2>
      <div>
        { userState
          ? <Image src={userState.picture} alt={userState.name} width={40} height={40} />
          : <button className={styles.header__authButton} onClick={authenticate}>
              Log in
            </button>
        }
      </div>
    </header>
  )
}

export default Header
