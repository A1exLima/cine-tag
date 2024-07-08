import { LayoutContainer } from './style'

import { Outlet } from 'react-router-dom'

import { Footer } from '../../components/footer'
import { Side } from '../../components/sideBar'

export function LayoutDefault() {
  return (
    <LayoutContainer>
      <Side />
      <Outlet />
      <Footer />
    </LayoutContainer>
  )
}
