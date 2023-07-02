'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { fetchUser } from '@/api/services/serviceAuthentication'
import { Albums } from '@/components/Albums'
import { Loader } from '@/components/Loader'
import { useSelector } from 'react-redux'

import styles from './styles.module.scss'

const Home = () => {
  const searchParams = useSearchParams()
  const code: string|null = searchParams.get('code')
  const [user, setUser] = useState<string|null>(null)
  const isLoading = useSelector((state: any) => state.loading.isAlbumsLoading)

  useEffect(() => {
    if (code) {
      fetchUser(code)
    }
    setUser(localStorage.getItem('user'))
  }, [code])

  return (
    <main className={styles.home}>
      { user && <div>
        <Albums />
      </div> }
      { isLoading && <Loader /> }
    </main>
  )
}

export default Home
