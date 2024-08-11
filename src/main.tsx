import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { AppRouter } from './router'
import { RosterProvider } from './context/RosterContex'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RosterProvider>
      <AppRouter />
    </RosterProvider>
  </StrictMode>,
)
