import { Outlet } from 'react-router-dom'
import { Header } from '../../components/header'
import { Footer } from '../../components/footer'

export function LayoutDefault() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
