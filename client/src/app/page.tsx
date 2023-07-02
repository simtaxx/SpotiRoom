'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { fetchUser } from '@/api/services/serviceAuthentication'

import styles from './styles.module.scss'
import { Albums } from '@/components/Albums'

const Home = () => {
  const searchParams = useSearchParams()
  const code: string|null = searchParams.get('code')

  useEffect(() => {
    if (code) {
      fetchUser(code)
    }
  })

  return (
    <main className={styles.home}>
      <Albums />
    </main>
  )
}

export default Home
