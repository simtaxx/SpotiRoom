'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { fetchUser } from '@/api/services/serviceAuthentication'

import styles from './styles.module.scss'

const Home = () => {
  const searchParams = useSearchParams()
  const code: string|null = searchParams.get('code')

  useEffect(() => {
    if (code) {
      fetchUser(code)
    }
  })

  return (
    <main>
      <h1>SpotiRoom</h1>
    </main>
  )
}

export default Home
