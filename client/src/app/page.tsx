'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { getAccessToken, getRefreshedAccessToken } from '@/api/authentication'

import styles from './styles.module.scss'

const Home = () => {
  const searchParams = useSearchParams()
  const code: string|null = searchParams.get('code')

  useEffect(() => {
    fetchAccessToken()
  })

  const fetchAccessToken = async () => {
    if (!code) return
    const { access_token, refresh_token, token_type } = await getAccessToken(code)
    console.log(access_token)
    localStorage.setItem('authAccessToken', `${token_type} ${access_token}`)
    localStorage.setItem('authRefreshToken', refresh_token)
  }

  /* const fetchRefreshAccessToken = async () => {
    const { access_token, token_type } = await getRefreshedAccessToken()
    localStorage.setItem('authAccessToken', `${token_type} ${access_token}`)
  } */

  return (
    <main>
      <h1>SpotiRoom</h1>
    </main>
  )
}

export default Home
