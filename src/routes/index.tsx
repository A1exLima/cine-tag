import { Routes, Route } from 'react-router-dom'

import { LayoutDefault } from '../layouts/layoutDefault'
import { Home } from '../pages/home'
import { Favorites } from '../pages/favorites'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<LayoutDefault />}>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
    </Routes>
  )
}
