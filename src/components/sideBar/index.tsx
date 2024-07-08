import { Brand, Button, Menu, Nav, SideBarContainer } from './style'

import { useState } from 'react'
import { Link } from 'react-router-dom'

import { PiCoffeeFill } from 'react-icons/pi'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

export function Side() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <SideBarContainer>
      <Nav className={`${menuOpen ? 'sideBar-open' : ''}`}>
        <div>
          <Brand>
            <PiCoffeeFill />
            <p>CINE TAG</p>
          </Brand>

          <Menu>
            <Link to="/">
              <li>Home</li>
            </Link>

            <Link to="/favorites">
              <li>Favoritos</li>
            </Link>
          </Menu>
        </div>

        {menuOpen ? (
          <Button onClick={toggleMenu}>
            <IoIosArrowForward />
          </Button>
        ) : (
          <Button onClick={toggleMenu}>
            <IoIosArrowBack />
          </Button>
        )}
      </Nav>
    </SideBarContainer>
  )
}
