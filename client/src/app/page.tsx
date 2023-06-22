'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from "next/navigation";
import { getAccessToken } from '@/api/authentication'
import styles from './styles.module.scss'

const Home = () => {
  const router = useRouter()
  const urlParams = new URLSearchParams(window.location.search);
  const authCode = urlParams.get('code') || ''

  useEffect(() => {
    if (authCode) {
      fetchAccessToken()
    }
  }, [])

  const fetchAccessToken = async () => {
    const codeVerifier = window.localStorage.getItem('codeVerifier') || ''
    const accessToken = await getAccessToken(authCode, codeVerifier)
    window.localStorage.setItem('accessToken', accessToken)
    router.push('/')
  }

  return (
    <main>
      <h1>SpotiRoom</h1>
    </main>
  )
}

export default Home
