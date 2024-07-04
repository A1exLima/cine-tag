import { HomeContainer } from './style'

export function Home() {
  return (
    <HomeContainer>
      <h1>Home</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/favorites">Favoritos</a>
          </li>
        </ul>
      </nav>
    </HomeContainer>
  )
}
