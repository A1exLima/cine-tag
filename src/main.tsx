import React from 'react'
import ReactDOM from 'react-dom/client'

import { GlobalStyles } from './styles/globalStyles'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/defaultThemes'

import { Router } from './routes'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
