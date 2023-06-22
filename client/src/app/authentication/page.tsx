'use client'

import { getAuthorization } from '@/api/authentication'
import { useEffect } from 'react'

const authentication = () => {

  useEffect(() => {
    authenticate()
  }, [])

  const authenticate = async () => {
    const { redirectionURL, codeVerifier } = await getAuthorization()
    window.localStorage.setItem('codeVerifier', codeVerifier)
    window.location = redirectionURL
  }

  return (
    <div>
      <h2>Authentication</h2>
    </div>
  )
}

export default authentication
