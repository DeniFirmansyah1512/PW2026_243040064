import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './tugas2/App.tsx' // Arahkan ke folder tugas2

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
