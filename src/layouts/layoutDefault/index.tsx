import { LayoutContainer } from './style'

import { Outlet } from 'react-router-dom'

import { Footer } from '../../components/footer'
import { Header } from '../../components/header'

export function LayoutDefault() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
      <Footer />
    </LayoutContainer>
  )
}
