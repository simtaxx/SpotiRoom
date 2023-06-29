'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Provider } from 'react-redux'
import store from '@/store/store'

import '../assets/styles/reset.scss'

export const metadata = {
  title: 'SpotiRoom',
  description: 'Your own music room, but with your friends!'
}

interface IRootLayoutProps {
  children: React.ReactNode
}

const RootLayout = ({ children }: IRootLayoutProps) => {
  return (
    <html lang="en">
      <Provider store={store}>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </Provider>
    </html>
  )
}

export default RootLayout
