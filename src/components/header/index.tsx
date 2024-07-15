import { Link } from 'react-router-dom'
import { HeaderContainer } from './style'
import { PiCoffeeFill } from 'react-icons/pi'
export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <Link to="/">
          <p>
            <PiCoffeeFill /> CINE TAG
          </p>
        </Link>

        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/favorites">
            <li>Favoritos</li>
          </Link>
        </ul>
      </nav>
    </HeaderContainer>
  )
}
