import { FavoritesContainer } from './style'

export function Favorites() {
  return (
    <FavoritesContainer>
      <h1>Favoritos</h1>
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
    </FavoritesContainer>
  )
}
